// Hybrid Web Audio & Real HTML5 MP3 Audio Engine for COREBACK Web
class BeatEngine {
  constructor() {
    this.audioCtx = null;
    this.analyser = null;
    this.gainNode = null;
    this.htmlAudio = null;
    this.sourceNode = null;
    this.isPlaying = false;
    this.currentTrack = null;
    this.timerId = null;
    this.step = 0;
    this.volume = 0.85;
    this.onEndedCallback = null;
    this.onTimeUpdateCallback = null;
  }

  init() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioContext();
      this.analyser = this.audioCtx.createAnalyser();
      this.analyser.fftSize = 64;
      this.gainNode = this.audioCtx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.gainNode.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
    }
    if (this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  setOnEnded(cb) {
    this.onEndedCallback = cb;
  }

  setOnTimeUpdate(cb) {
    this.onTimeUpdateCallback = cb;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.gainNode && this.audioCtx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
    if (this.htmlAudio) {
      this.htmlAudio.volume = this.volume;
    }
  }

  seek(fraction) {
    if (this.htmlAudio && this.htmlAudio.duration) {
      this.htmlAudio.currentTime = fraction * this.htmlAudio.duration;
    }
  }

  start(track) {
    this.init();
    this.stop();
    this.currentTrack = track;
    this.isPlaying = true;

    // Reproducir archivo real MP3 si existe
    if (track && track.audioFile) {
      this.htmlAudio = new Audio(track.audioFile);
      this.htmlAudio.volume = this.volume;
      this.htmlAudio.crossOrigin = 'anonymous';

      try {
        if (!this.sourceNode) {
          this.sourceNode = this.audioCtx.createMediaElementSource(this.htmlAudio);
          this.sourceNode.connect(this.gainNode);
        }
      } catch (e) {
        // En caso de que ya estuviese conectado o política local
      }

      this.htmlAudio.addEventListener('ended', () => {
        if (this.onEndedCallback) {
          this.onEndedCallback();
        }
      });

      this.htmlAudio.addEventListener('timeupdate', () => {
        if (this.onTimeUpdateCallback && this.htmlAudio) {
          this.onTimeUpdateCallback(this.htmlAudio.currentTime, this.htmlAudio.duration || 1);
        }
      });

      const playPromise = this.htmlAudio.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.log('Audio autoplay prevented or error, falling back:', err);
          this.startSynth(track);
        });
      }
      return;
    }

    // Fallback síntesis de ritmos
    this.startSynth(track);
  }

  playKick(time) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.frequency.setValueAtTime(140, time);
    osc.frequency.exponentialRampToValueAtTime(32, time + 0.12);
    gain.gain.setValueAtTime(1, time);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.28);
    osc.connect(gain);
    gain.connect(this.gainNode);
    osc.start(time);
    osc.stop(time + 0.3);
  }

  playSnare(time) {
    const bufferSize = this.audioCtx.sampleRate * 0.15;
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(800, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.7, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + 0.15);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);
    noise.start(time);
    noise.stop(time + 0.16);

    const osc = this.audioCtx.createOscillator();
    const oscGain = this.audioCtx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(180, time);
    osc.frequency.exponentialRampToValueAtTime(80, time + 0.08);
    oscGain.gain.setValueAtTime(0.5, time);
    oscGain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
    osc.connect(oscGain);
    oscGain.connect(this.gainNode);
    osc.start(time);
    osc.stop(time + 0.1);
  }

  playHiHat(time, open = false) {
    const bufferSize = this.audioCtx.sampleRate * (open ? 0.2 : 0.04);
    const buffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }
    const noise = this.audioCtx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(7000, time);

    const gain = this.audioCtx.createGain();
    gain.gain.setValueAtTime(0.35, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + (open ? 0.18 : 0.04));

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);
    noise.start(time);
    noise.stop(time + (open ? 0.2 : 0.05));
  }

  playBassNote(freq, time, duration = 0.4) {
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);

    const filter = this.audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(220, time);

    gain.gain.setValueAtTime(0.6, time);
    gain.gain.exponentialRampToValueAtTime(0.01, time + duration);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);
    osc.start(time);
    osc.stop(time + duration);
  }

  scheduleStep(stepTime, step) {
    const s = step % 16;
    const tone = this.currentTrack?.audioTone || 'dark';

    if (s === 0 || s === 6 || s === 10) {
      this.playKick(stepTime);
    }
    if (s === 4 || s === 12) {
      this.playSnare(stepTime);
    }
    if (s % 2 === 0 || (tone === 'trap' && s % 1 === 0)) {
      this.playHiHat(stepTime, s === 14);
    }
    if (s === 0) {
      this.playBassNote(55, stepTime, 0.4);
    } else if (s === 6) {
      this.playBassNote(49, stepTime, 0.3);
    } else if (s === 10) {
      this.playBassNote(41, stepTime, 0.4);
    }
  }

  startSynth(track) {
    this.step = 0;
    const bpm = track.bpm || 90;
    const stepDuration = (60 / bpm) / 4;

    let nextStepTime = this.audioCtx.currentTime + 0.05;

    const scheduler = () => {
      if (!this.isPlaying) return;
      while (nextStepTime < this.audioCtx.currentTime + 0.1) {
        this.scheduleStep(nextStepTime, this.step);
        this.step++;
        nextStepTime += stepDuration;
      }
      this.timerId = setTimeout(scheduler, 25);
    };

    scheduler();
  }

  stop() {
    this.isPlaying = false;
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.htmlAudio) {
      this.htmlAudio.pause();
      this.htmlAudio.currentTime = 0;
      this.htmlAudio = null;
    }
  }

  getFrequencyData() {
    if (!this.analyser) return new Uint8Array(32);
    const array = new Uint8Array(this.analyser.frequencyBinCount);
    this.analyser.getByteFrequencyData(array);

    // Si está reproduciendo mp3 y los valores son planos por política de audio del navegador, simular visualización reactiva
    if (this.isPlaying && array.every(v => v === 0)) {
      for (let i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.sin(Date.now() / 150 + i) * 60 + 120 + Math.random() * 50);
      }
    }

    return array;
  }
}

export const beatEngine = new BeatEngine();
