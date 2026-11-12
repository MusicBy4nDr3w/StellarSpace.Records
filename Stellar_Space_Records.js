const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const prefersReducedMotion = matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
const presaveCountdownDuration = 12 * 60 * 60 * 1000;

// Add src for an audio file and link for a Presave / Listen button when available.
const releases = [
  {
    title: "Alive",
    artist: "4nDr3w & Frezdlee",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/alive.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: new Date(Date.now() + presaveCountdownDuration),
    status: "pre",
    src: "assets/audio/4nDr3w%20%26%20Frezdlee%20-%20Alive.mp3",
    playFull: true,
  },
  {
    title: "Rise To The Sky",
    artist: "Fonglee & 4nDr3w",
    bpm: 140,
    root: 98,
    artwork: "url('assets/image/rise%20to%20the%20sky.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/Fonglee%20%26%204nDr3w%20-%20Rise%20To%20The%20Sky.mp3",
    playFull: true,
  },
  {
    title: "Saturn",
    artist: "4sta. & MachiChunky",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/saturrn.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/Saturn.mp3",
    playFull: true,
  },
  {
    title: "Believe",
    artist: "4sta. & MachiChunky",
    bpm: 124,
    root: 123,
    artwork: "url('assets/image/belive.jpg')",
    accent: "#4fe3b6",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/Believe.mp3",
    playFull: true,
  },
  {
    title: "One More Time",
    artist: "4sta. & MachiChunky",
    bpm: 150,
    root: 104,
    artwork: "url('assets/image/one%20more%20time.jpg')",
    accent: "#b4d95a",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/One%20More%20Time.mp3",
    playFull: true,
  },
  {
    title: "Call It Love",
    artist: "4sta. & TuanNguyen",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/Call%20it%20love.jpg')",
    accent: "#6fd3f0",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/Call%20It%20Love.mp3",
    playFull: true,
  },
  {
    title: "Gone",
    artist: "lostinourmind & windsor boy",
    bpm: 126,
    root: 110,
    artwork: "url('assets/image/gone.jpg')",
    accent: "#b4d95a",
    hasArtwork: true,
    releaseDate: null,
    status: "out",
    src: "assets/audio/Gone.mp3",
    playFull: true,
  },
];

const popularReleases = [
  {
    title: "Alive",
    artist: "4nDr3w & Frezdlee",
    plays: "2.4M",
    artwork: releases[0].artwork,
    releaseIndex: 0,
  },
  {
    title: "Rise To The Sky",
    artist: "Fonglee & 4nDr3w",
    plays: "1.8M",
    artwork: releases[1].artwork,
    releaseIndex: 1,
  },
  {
    title: "Saturn",
    artist: "4sta. & MachiChunky",
    plays: "720K",
    artwork: releases[2].artwork,
    releaseIndex: 2,
  },
  {
    title: "Believe",
    artist: "4sta. & MachiChunky.",
    plays: "1.3M",
    artwork: releases[3].artwork,
    releaseIndex: 3,
  },
  {
    title: "One More Time",
    artist: "4sta. & MachiChunky",
    plays: "940K",
    artwork: releases[4].artwork,
    releaseIndex: 4,
  },
  {
    title: "Call It Love",
    artist: "4sta. & TuanNguyen",
    artwork: releases[5].artwork,
    releaseIndex: 5,
  },
  {
    title: "Gone",
    artist: "lostinourmind & windsor boy",
    artwork: releases[6].artwork,
    releaseIndex: 6,
  },
];

// Add an image URL to image and social URLs to socialLinks as needed.
const artists = [
  {
    name: "4nDr3w",
    genre: "House",
    releaseCount: 2,
    artwork: "linear-gradient(135deg,#6551A2,#3F5FAC)",
    image: "assets/image/avt/4ndr3w.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },
  {
    name: "4sta",
    genre: "Tech",
    releaseCount: 3,
    artwork: "linear-gradient(135deg,#3F5FAC,#24D1AF)",
    image: "assets/image/avt/HaiDak.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },

  {
    name: "MachiChunky",
    genre: "House",
    releaseCount: 3,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/machi.jpg",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },

  {
    name: "Fonglee",
    genre: "House",
    releaseCount: 1,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/phonglii.webp",
    socialLinks: {
      instagram: "#",
      tiktok: "#",
      x: "#",
      twitch: "",
      facebook: "",
      discord: "",
    },
  },
  // {
  //   name: "Miyan",
  //   genre: "Kawaii",
  //   releaseCount: 0,
  //   artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
  //   image: "",
  //   socialLinks: {
  //     instagram: "#",
  //     tiktok: "#",
  //     x: "#",
  //     twitch: "",
  //     facebook: "",
  //     discord: "",
  //   },
  // },
  {
    name: "lostinurmind",
    genre: "House",
    releaseCount: 1,
    artwork: "linear-gradient(135deg,#24D1AF,#A4CE46)",
    image: "assets/image/avt/long.webp",
    socialLinks: {
      instagram: "4sta.flp",
      facebook: "https://www.facebook.com/chd.azura",
      discord: "_quarshy.flp",
    },
  },
];

const formatReleaseDate = (date) =>
  date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

class ReleaseSlider {
  constructor(releaseList) {
    this.releases = releaseList;
    this.currentIndex = 0;
    this.player = null;
    this.slidesContainer = $("#sls");
    this.backgroundsContainer = $("#bgs");
    this.progressFill = $("#fill");

    this.render();
    this.bindEvents();
    this.updateCountdowns();
  }

  setPlayer(player) {
    this.player = player;
  }

  render() {
    this.slidesContainer.innerHTML = this.releases
      .map((release, index) => {
        const slideClass = index === 0 ? "on" : "r";
        const releaseContent =
          release.status === "pre" && release.releaseDate
            ? `<div class="cdp" data-t="${+release.releaseDate}">
                ${["days", "hrs", "min", "sec"]
                  .map((unit) => `<b>00<small>${unit}</small></b>`)
                  .join("<span>:</span>")}
              </div>`
            : release.status === "pre"
              ? '<div class="cdp now">Pre-save</div>'
              : '<div class="cdp now"><i class="dot"></i>Out now</div>';
        const buttonLabel = release.status === "pre" ? "Presave" : "Listen now";
        const releaseLabel =
          release.status === "pre" ? "Release date" : "Released";
        const releaseDateContent = release.releaseDate
          ? `<p class="rel">${releaseLabel}: ${formatReleaseDate(release.releaseDate)}</p>`
          : "";
        const linkAttributes = release.link
          ? ' target="_blank" rel="noopener"'
          : "";

        return `
          <article
            class="sl ${slideClass}"
            style="--art:${release.artwork};--ac:${release.accent}"
            aria-label="${release.title}"
          >
            <div class="art">
              ${release.hasArtwork ? "" : '<i class="mask"></i>'}
              <button class="pp" aria-label="Play track"></button>
            </div>
            <div class="info">
              <h2>${release.title}</h2>
              <p class="artist">${release.artist}</p>
              ${releaseContent}
              <div>
                <a class="btn mag" href="${release.link || "#"}"${linkAttributes}>
                  ${buttonLabel}
                </a>
              </div>
              ${releaseDateContent}
            </div>
          </article>
        `;
      })
      .join("");

    this.backgroundsContainer.innerHTML = this.releases
      .map(
        (release, index) => `
          <div
            class="bgl ${index === 0 ? "on" : ""}"
            style="--art:${release.artwork}"
          ></div>
        `,
      )
      .join("");

    this.slides = $$(".sl", this.slidesContainer);
    this.backgrounds = $$(".bgl", this.backgroundsContainer);
  }

  bindEvents() {
    $("#prev").addEventListener("click", () => {
      this.goTo(this.currentIndex - 1, -1);
    });
    $("#next").addEventListener("click", () => {
      this.goTo(this.currentIndex + 1, 1);
    });

    addEventListener("keydown", (event) => {
      if (event.target.tagName === "INPUT") {
        return;
      }

      if (event.key === "ArrowRight") {
        this.goTo(this.currentIndex + 1, 1);
      }

      if (event.key === "ArrowLeft") {
        this.goTo(this.currentIndex - 1, -1);
      }
    });

    let pointerStartX = null;
    $(".stage").addEventListener("pointerdown", (event) => {
      pointerStartX = event.clientX;
    });
    addEventListener("pointerup", (event) => {
      if (
        pointerStartX !== null &&
        Math.abs(event.clientX - pointerStartX) > 60
      ) {
        const direction = event.clientX < pointerStartX ? 1 : -1;
        this.goTo(this.currentIndex + direction, direction);
      }

      pointerStartX = null;
    });

    $("#q").addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();

      if (!query) {
        return;
      }

      const releaseIndex = this.releases.findIndex((release) =>
        `${release.title} ${release.artist}`.toLowerCase().includes(query),
      );

      if (releaseIndex >= 0 && releaseIndex !== this.currentIndex) {
        scrollTo({ top: 0, behavior: "smooth" });
        this.goTo(releaseIndex, releaseIndex > this.currentIndex ? 1 : -1);
      }
    });
  }

  updateCountdowns() {
    let hasActiveCountdown = false;

    $$(".cdp[data-t]").forEach((countdown) => {
      const remainingSeconds = Math.max(
        0,
        Math.ceil((countdown.dataset.t - Date.now()) / 1000),
      );
      const values = [
        (remainingSeconds / 86400) | 0,
        ((remainingSeconds % 86400) / 3600) | 0,
        ((remainingSeconds % 3600) / 60) | 0,
        remainingSeconds % 60,
      ];

      values.forEach((value, index) => {
        countdown.children[index * 2].firstChild.nodeValue = String(
          value,
        ).padStart(2, "0");
      });

      if (remainingSeconds > 0) {
        hasActiveCountdown = true;
      }
    });

    if (hasActiveCountdown) {
      setTimeout(() => this.updateCountdowns(), 1000);
    }
  }

  goTo(index, direction, shouldAutoplay = false) {
    const nextIndex = (index + this.releases.length) % this.releases.length;

    if (nextIndex === this.currentIndex && !shouldAutoplay) {
      return;
    }

    const currentSlide = this.slides[this.currentIndex];
    const nextSlide = this.slides[nextIndex];

    nextSlide.style.transition = "none";
    nextSlide.className = `sl ${direction > 0 ? "r" : "l"}`;
    nextSlide.offsetWidth;
    nextSlide.style.transition = "";
    currentSlide.className = `sl ${direction > 0 ? "l" : "r"}`;
    nextSlide.className = "sl on";

    this.backgrounds[this.currentIndex].classList.remove("on");
    this.backgrounds[nextIndex].classList.add("on");
    this.currentIndex = nextIndex;

    if (shouldAutoplay || this.player.isPlaying) {
      this.player.play();
    } else {
      this.player.stop();
      this.progressFill.style.width = "0%";
    }
  }
}

class AudioPreviewPlayer {
  constructor(releaseList, slider) {
    this.releases = releaseList;
    this.slider = slider;
    this.audioContext = null;
    this.analyser = null;
    this.masterGain = null;
    this.timer = null;
    this.audioElement = null;
    this.audioReleaseIndex = null;
    this.isPlaying = false;
    this.isFullTrack = false;
    this.startTime = 0;
    this.progressFill = $("#fill");
    this.miniPlayer = $("#mini-player");
    this.miniArtwork = $("#mini-art");
    this.miniState = $("#mini-state");
    this.miniTitle = $("#mini-title");
    this.miniArtist = $("#mini-artist");
    this.miniToggle = $("#mini-toggle");
    this.miniSeek = $("#mini-seek");
    this.miniTime = $("#mini-time");
    this.isMiniPlayerDismissed = false;
    this.miniReleaseIndex = null;
    this.previewStart = 10;
    this.previewEnd = 25;
    this.scale = [0, 3, 5, 7, 10, 12, 15];
    this.frequencies = new Uint8Array(64);

    $$(".pp").forEach((button) => {
      button.addEventListener("click", () => {
        if (this.isPlaying) {
          this.pause();
        } else {
          this.play();
        }
      });
    });

    this.miniToggle.addEventListener("click", () => {
      if (this.isPlaying) {
        this.pause();
      } else {
        this.play();
      }
    });
    $("#mini-prev").addEventListener("click", () => {
      this.slider.goTo(this.slider.currentIndex - 1, -1, this.isPlaying);
    });
    $("#mini-next").addEventListener("click", () => {
      this.slider.goTo(this.slider.currentIndex + 1, 1, this.isPlaying);
    });
    this.miniSeek.addEventListener("input", () => {
      if (this.audioElement && Number.isFinite(this.audioElement.duration)) {
        const currentTime = Number(this.miniSeek.value);
        this.audioElement.currentTime = currentTime;
        this.updateMiniProgress(currentTime, this.audioElement.duration);
      }
    });
    $("#mini-close").addEventListener("click", () => {
      this.isMiniPlayerDismissed = true;
      this.setMiniPlayerVisibility(false);
    });
    addEventListener(
      "scroll",
      () => {
        if (window.scrollY < 120) {
          this.isMiniPlayerDismissed = false;
        }

        this.updateMiniPlayerVisibility();
      },
      { passive: true },
    );
    this.updateMiniPlayer();
    this.updateMiniPlayerVisibility();
    this.animateProgress();
  }

  updateMiniPlayerVisibility() {
    this.setMiniPlayerVisibility(
      window.scrollY > 240 && !this.isMiniPlayerDismissed,
    );
  }

  setMiniPlayerVisibility(isVisible) {
    const shouldAnimate =
      isVisible && !this.miniPlayer.classList.contains("visible");

    this.miniPlayer.classList.toggle("visible", isVisible);
    this.miniPlayer.setAttribute("aria-hidden", String(!isVisible));
    this.miniPlayer.inert = !isVisible;

    if (shouldAnimate) {
      this.animateMiniPlayerSlices();
    }
  }

  animateMiniPlayerSlices() {
    this.miniPlayer.classList.remove("slice-in");
    void this.miniPlayer.offsetWidth;
    this.miniPlayer.classList.add("slice-in");
  }

  playOscillator(type, frequency, start, duration, volume, endFrequency) {
    const oscillator = this.audioContext.createOscillator();
    const gain = this.audioContext.createGain();

    oscillator.type = type;
    oscillator.frequency.setValueAtTime(frequency, start);

    if (endFrequency) {
      oscillator.frequency.exponentialRampToValueAtTime(
        endFrequency,
        start + duration,
      );
    }

    gain.gain.setValueAtTime(volume, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
    oscillator.connect(gain).connect(this.masterGain);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.02);
  }

  playNote(release, noteNumber, start, stepDuration) {
    const step = noteNumber % 16;
    const bar = (noteNumber >> 4) & 3;
    const semitone = 2 ** (1 / 12);

    if (step % 4 === 0) {
      this.playOscillator("sine", 150, start, 0.25, 1, 40);
    }

    if (step % 4 === 2) {
      this.playOscillator("square", 7000, start, 0.03, 0.05);
    }

    if (step % 2 === 0) {
      const bassOffsets = [0, 0, 5, 3];
      const bassFrequency = (release.root / 2) * semitone ** bassOffsets[bar];
      this.playOscillator(
        "sawtooth",
        bassFrequency,
        start,
        stepDuration * 1.8,
        0.16,
      );
    }

    const scaleIndex = (noteNumber * 3 + bar * 2) % this.scale.length;
    const melodyFrequency =
      release.root * 2 * semitone ** this.scale[scaleIndex];
    this.playOscillator(
      "triangle",
      melodyFrequency,
      start,
      stepDuration * 1.6,
      0.1,
    );
  }

  updatePlayButtons() {
    $$(".pp").forEach((button, index) => {
      const isActive = this.isPlaying && index === this.slider.currentIndex;
      button.classList.toggle("on", isActive);
      button.setAttribute(
        "aria-label",
        isActive ? "Pause track" : "Play track",
      );
    });

    $$(".pl a[data-i]").forEach((link) => {
      const isActive =
        this.isPlaying && Number(link.dataset.i) === this.slider.currentIndex;
      $(".pg", link).classList.toggle("on", isActive);
    });

    this.updateMiniPlayer();
  }

  formatTime(seconds) {
    if (!Number.isFinite(seconds)) {
      return "0:00";
    }

    const wholeSeconds = Math.floor(seconds);
    const minutes = Math.floor(wholeSeconds / 60);
    const remainingSeconds = String(wholeSeconds % 60).padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  }

  updateMiniPlayer() {
    const release = this.releases[this.slider.currentIndex];
    const hasReleaseChanged =
      this.miniReleaseIndex !== null &&
      this.miniReleaseIndex !== this.slider.currentIndex;

    this.miniReleaseIndex = this.slider.currentIndex;

    this.miniTitle.textContent = release.title;
    this.miniArtist.textContent = release.artist;
    this.miniState.textContent = this.isPlaying ? "" : "";
    this.miniArtwork.style.backgroundImage = release.artwork;
    this.miniArtwork.classList.toggle("has-artwork", release.hasArtwork);
    this.miniToggle.classList.toggle("playing", this.isPlaying);
    this.miniToggle.setAttribute(
      "aria-label",
      this.isPlaying ? "Pause track" : "Play track",
    );

    const duration = this.audioElement?.duration;
    const currentTime = this.audioElement?.currentTime || 0;
    const hasDuration = Number.isFinite(duration);

    this.miniSeek.max = hasDuration ? String(duration) : "0";
    this.miniSeek.value = String(hasDuration ? currentTime : 0);
    this.miniSeek.disabled = !hasDuration;
    this.miniTime.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;
    this.miniSeek.style.setProperty(
      "--seek-progress",
      hasDuration ? `${(currentTime / duration) * 100}%` : "0%",
    );

    if (hasReleaseChanged && this.miniPlayer.classList.contains("visible")) {
      this.animateMiniPlayerSlices();
    }
  }

  stop() {
    clearInterval(this.timer);

    if (this.masterGain) {
      this.masterGain.gain.setTargetAtTime(
        0,
        this.audioContext.currentTime,
        0.05,
      );
    }

    if (this.audioElement) {
      this.audioElement.pause();
      this.audioElement = null;
    }

    this.audioReleaseIndex = null;
    this.isPlaying = false;
    this.updatePlayButtons();
  }

  pause() {
    if (!this.audioElement) {
      this.stop();
      return;
    }

    this.audioElement.pause();
    this.isPlaying = false;
    this.updatePlayButtons();
  }

  play() {
    if (
      this.audioElement &&
      this.audioElement.paused &&
      this.audioReleaseIndex === this.slider.currentIndex
    ) {
      this.isPlaying = true;
      this.audioContext.resume();
      this.masterGain.gain.setTargetAtTime(
        0.45,
        this.audioContext.currentTime,
        0.05,
      );
      this.audioElement.play();
      this.updatePlayButtons();
      return;
    }

    this.stop();

    const release = this.releases[this.slider.currentIndex];
    this.isFullTrack = release.playFull === true;
    this.audioContext = this.audioContext || new AudioContext();
    this.audioContext.resume();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 128;
    this.masterGain = this.audioContext.createGain();
    this.masterGain.gain.value = 0.45;
    this.masterGain.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.isPlaying = true;

    if (release.src) {
      this.audioElement = new Audio();
      this.audioReleaseIndex = this.slider.currentIndex;
      this.audioElement.src = release.src;
      this.audioContext
        .createMediaElementSource(this.audioElement)
        .connect(this.masterGain);
      this.audioElement.preload = "auto";
      this.audioElement.onloadedmetadata = () => {
        if (!this.audioElement) {
          return;
        }

        if (!this.isFullTrack) {
          this.audioElement.currentTime = this.previewStart;
        }

        this.updateMiniPlayer();
      };
      this.audioElement.onended = () => {
        this.slider.goTo(this.slider.currentIndex + 1, 1, true);
      };
      this.audioElement.play();
    } else {
      const stepDuration = 60 / release.bpm / 4;
      let noteNumber = Math.round(this.previewStart / stepDuration / 16) * 16;
      let nextNoteTime = this.audioContext.currentTime + 0.05;
      this.startTime = nextNoteTime;

      this.timer = setInterval(() => {
        while (nextNoteTime < this.audioContext.currentTime + 0.25) {
          this.playNote(release, noteNumber++, nextNoteTime, stepDuration);
          nextNoteTime += stepDuration;
        }

        if (
          this.audioContext.currentTime - this.startTime >=
          this.previewEnd - this.previewStart
        ) {
          this.slider.goTo(this.slider.currentIndex + 1, 1, true);
        }
      }, 60);
    }

    this.updatePlayButtons();
  }

  animateProgress() {
    if (this.isPlaying && this.audioElement) {
      const startTime = this.isFullTrack ? 0 : this.previewStart;
      const endTime = this.isFullTrack
        ? this.audioElement.duration
        : this.previewEnd;
      const elapsedTime = this.audioElement.currentTime;

      if (!this.isFullTrack && elapsedTime >= this.previewEnd) {
        this.slider.goTo(this.slider.currentIndex + 1, 1, true);
      }

      if (Number.isFinite(endTime) && endTime > startTime) {
        const progress = Math.max(
          0,
          Math.min(
            100,
            ((elapsedTime - startTime) / (endTime - startTime)) * 100,
          ),
        );
        this.progressFill.style.width = `${progress}%`;
      }

      this.updateMiniProgress(elapsedTime, this.audioElement.duration);
    } else if (this.isPlaying) {
      const elapsedTime =
        this.audioContext.currentTime - this.startTime + this.previewStart;
      const progress = Math.max(
        0,
        Math.min(
          100,
          ((elapsedTime - this.previewStart) /
            (this.previewEnd - this.previewStart)) *
            100,
        ),
      );
      this.progressFill.style.width = `${progress}%`;
      this.updateMiniProgress(elapsedTime, this.previewEnd);
    }

    requestAnimationFrame(() => this.animateProgress());
  }

  updateMiniProgress(currentTime, duration) {
    const hasDuration = Number.isFinite(duration);

    this.miniTime.textContent = `${this.formatTime(currentTime)} / ${this.formatTime(duration)}`;
    this.miniSeek.max = hasDuration ? String(duration) : "0";
    this.miniSeek.value = String(hasDuration ? currentTime : 0);
    this.miniSeek.disabled = !hasDuration;
    this.miniSeek.style.setProperty(
      "--seek-progress",
      hasDuration ? `${(currentTime / duration) * 100}%` : "0%",
    );
  }
}

class LandingPage {
  constructor(releaseList, popularList, artistList, slider, player) {
    this.releases = releaseList;
    this.popularReleases = popularList;
    this.artists = artistList;
    this.slider = slider;
    this.player = player;
    this.artistItems = [];
    this.artistContainer = $("#ag");
    this.touchInput = matchMedia("(hover:none)").matches;
    this.socialIcons = this.getSocialIcons();

    this.render();
    this.bindEvents();
  }

  getSocialIcons() {
    const icons = {};

    $$(".soc a").forEach((link) => {
      const name = link.getAttribute("aria-label").toLowerCase();
      icons[name] = link.innerHTML;
    });

    return icons;
  }

  render() {
    const latestReleaseIndex = this.releases
      .map((release, index) => index)
      .filter((index) => this.releases[index].status === "out")
      .sort(
        (first, second) =>
          this.releases[second].releaseDate - this.releases[first].releaseDate,
      )[0];
    const latestRelease = this.releases[latestReleaseIndex];

    this.renderLatestRelease(latestRelease);
    this.renderPopularReleases();
    this.renderArtists();
    this.latestReleaseIndex = latestReleaseIndex;
  }

  renderLatestRelease(release) {
    $("#lt").innerHTML = `
      <div
        class="cv"
        id="lpv"
        role="button"
        tabindex="0"
        aria-label="Play track: ${release.title}"
        style="--art:${release.artwork}"
      >
        ${release.hasArtwork ? "" : '<i class="mask"></i>'}
      </div>
      <div class="lc">
        <h3>${release.title}</h3>
        <p class="ar">${release.artist}</p>
        <a class="va" href="${release.link || "#"}">Listen now</a>
      </div>
    `;
  }

  renderPopularReleases() {
    $("#pl").innerHTML = this.popularReleases
      .map(
        (release, index) => `
          <li>
            <a
              href="${release.link || "#"}"
              ${release.releaseIndex != null ? `data-i="${release.releaseIndex}"` : ""}
            >
              <span class="n">${String(index + 1).padStart(2, "0")}</span>
              <span class="t" style="--art:${release.artwork}"></span>
              <span>
                <b>${release.title}</b>
                <small>
                  ${release.artist}${release.plays ? ` · ${release.plays} plays` : ""}
                </small>
              </span>
              <span class="pg"></span>
            </a>
          </li>
        `,
      )
      .join("");
  }

  renderArtists() {
    $("#ag").innerHTML = this.artists
      .map(
        (artist, index) => `
          <div class="it" tabindex="0">
            <div class="iw">
              <div class="hd">
                <span class="n">0${index + 1}</span>
                <b>${artist.name}</b>
                <i class="ch"></i>
                <button
                  class="artist-detail-close"
                  type="button"
                  aria-label="Close ${artist.name} profile"
                >×</button>
              </div>
              <div class="bd">
                <div class="in">
                  <div class="ph" style="--art:${artist.artwork}">
                    ${
                      artist.image
                        ? `<img src="${artist.image}" alt="${artist.name}" loading="lazy">`
                        : `<i class="mask" style="--r:${index * 18}deg"></i>`
                    }
                  </div>
                  <p class="am">${artist.genre} · ${artist.releaseCount} releases</p>
                  <div class="as">
                    ${this.renderSocialLinks(artist.socialLinks)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `,
      )
      .join("");

    this.artistItems = $$(".it");
  }

  renderSocialLinks(socialLinks = {}) {
    return Object.entries(socialLinks)
      .filter(([name, url]) => url && this.socialIcons[name])
      .map(
        ([name, url]) => `
          <a
            href="${url}"
            target="_blank"
            rel="noopener"
            aria-label="${name}"
          >${this.socialIcons[name]}</a>
        `,
      )
      .join("");
  }

  bindEvents() {
    this.artistItems.forEach((artistItem) => {
      artistItem.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") {
          this.selectArtist(artistItem);
        }
      });
      if (!this.touchInput) {
        artistItem.addEventListener("focus", () => {
          this.selectArtist(artistItem);
        });
      }
      artistItem.addEventListener("click", () => {
        this.selectArtist(artistItem);
      });
      $(".artist-detail-close", artistItem).addEventListener(
        "click",
        (event) => {
          event.stopPropagation();
          this.selectArtist(null);
          artistItem.focus();
        },
      );
      $(".as", artistItem).addEventListener("click", (event) => {
        event.stopPropagation();
      });
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        this.artistContainer.classList.contains("detail-open")
      ) {
        const selectedArtist = this.artistItems.find((artistItem) =>
          artistItem.classList.contains("open"),
        );
        this.selectArtist(null);
        selectedArtist?.focus();
      }
    });

    this.artistContainer.addEventListener("pointerleave", (event) => {
      if (event.pointerType === "mouse") {
        this.selectArtist(null);
      }
    });
    this.artistContainer.addEventListener("focusout", (event) => {
      if (!this.artistContainer.contains(event.relatedTarget)) {
        this.selectArtist(null);
      }
    });

    const latestReleasePreview = $("#lpv");
    latestReleasePreview.addEventListener("click", () => {
      this.playReleasePreview(this.latestReleaseIndex);
    });
    latestReleasePreview.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.playReleasePreview(this.latestReleaseIndex);
      }
    });

    $$(".pl a[data-i]").forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        this.playReleasePreview(+link.dataset.i);
      });
    });
  }

  selectArtist(selectedArtist) {
    const selectedIndex = this.artistItems.indexOf(selectedArtist);

    this.artistItems.forEach((artistItem, index) => {
      artistItem.classList.toggle("open", artistItem === selectedArtist);
      artistItem.classList.toggle(
        "past",
        Boolean(selectedArtist) && index < selectedIndex,
      );
      artistItem.classList.toggle(
        "after",
        Boolean(selectedArtist) && index > selectedIndex,
      );
    });

    const isSelected = Boolean(selectedArtist);
    this.artistContainer.classList.toggle(
      "detail-open",
      isSelected && this.touchInput,
    );
    this.artistContainer.classList.toggle("hov", isSelected);
    $(".lp").classList.toggle("dim", isSelected);
    document.body.classList.toggle("dim", isSelected);
    document.body.classList.toggle(
      "artist-detail-open",
      isSelected && this.touchInput,
    );
  }

  playReleasePreview(index) {
    if (index === this.slider.currentIndex) {
      this.player.play();
    } else {
      this.slider.goTo(index, index > this.slider.currentIndex ? 1 : -1, true);
    }
  }
}

// Intro animation sequence helpers and class
const introTiming = {
  unfold: 500, // biểu tượng trượt sang trái, chữ mở ra về bên phải
  hold: 300, // giữ logo hoàn chỉnh giữa màn hình trước khi bay lên header
  dock: 700, // logo bay tới header trong lúc nền đen trượt lên
  loadTimeout: 6000, // không chờ sự kiện window.load quá thời gian này
  reducedHold: 400, // giảm chuyển động: hiện logo tĩnh rồi vào trang
  watchdog: 15000, // giới hạn dự phòng để intro không bị kẹt trên màn hình
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const easeInOutQuart = (t) =>
  t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;

class IntroSequence {
  constructor(intro, onDone) {
    this.intro = intro;
    this.bg = $(".intro-bg", intro);
    this.symbol = $(".intro-sym", intro);
    this.lockup = $(".intro-lockup", intro);
    this.text = $(".lk-txt", intro);
    this.headerLogo = $("#nav .logo");
    this.onDone = onDone;
    this.finished = false;
  }

  async start() {
    const watchdog = setTimeout(() => this.finish(), introTiming.watchdog);

    try {
      if (prefersReducedMotion) {
        await this.playReduced();
      } else {
        await this.playFull();
      }
    } catch (error) {
      console.error(error);
    }

    clearTimeout(watchdog);
    this.finish();
  }

  // Works whether load has already fired or not, and never waits forever.
  waitForLoad() {
    return new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
        return;
      }

      addEventListener("load", resolve, { once: true });
      setTimeout(resolve, introTiming.loadTimeout);
    });
  }

  // Resolves once the existing spin/scale/fade-in of the symbol has completed.
  symbolReady() {
    if (typeof this.symbol.getAnimations !== "function") {
      return wait(1400);
    }

    return Promise.all(
      this.symbol
        .getAnimations()
        .map((animation) => animation.finished.catch(() => {})),
    );
  }

  async playFull() {
    const loaded = this.waitForLoad();

    await this.symbolReady();
    await this.unfold();
    await Promise.all([loaded, wait(introTiming.hold)]);
    await this.dock();
  }

  async playReduced() {
    this.intro.classList.add("static");
    await Promise.all([this.waitForLoad(), wait(introTiming.reducedHold)]);
  }

  symbolCentre() {
    const value = getComputedStyle(this.intro).getPropertyValue("--lk-sym-c");
    return parseFloat(value) || 0.5;
  }

  async unfold() {
    const { lockup, text, symbol } = this;
    // start with the symbol alone on the screen centre, then centre the whole lockup
    const shift = lockup.offsetWidth * (0.5 - this.symbolCentre());
    const options = {
      duration: introTiming.unfold,
      easing: "cubic-bezier(0.7, 0, 0.2, 1)",
      fill: "both",
    };
    const move = lockup.animate(
      [{ transform: `translateX(${shift}px)` }, { transform: "translateX(0)" }],
      options,
    );
    const slide = text.animate(
      [{ transform: "translateX(-101%)" }, { transform: "translateX(0)" }],
      options,
    );

    // swap the spinning symbol for the identical symbol inside the lockup
    lockup.style.opacity = "1";
    symbol.style.visibility = "hidden";

    await Promise.all([move.finished, slide.finished]);

    lockup.style.transform = "none";
    text.style.transform = "none";
    move.cancel();
    slide.cancel();
  }

  // Live rect of the header logo (null when it is not on screen, e.g. hidden on very small phones).
  dockTarget() {
    if (!this.headerLogo) {
      return null;
    }

    const rect = this.headerLogo.getBoundingClientRect();
    const visible =
      rect.width > 1 &&
      rect.height > 1 &&
      rect.bottom > 0 &&
      rect.top < innerHeight;

    return visible ? rect : null;
  }

  dock() {
    return new Promise((resolve) => {
      const { lockup, bg } = this;
      const startTime = performance.now();

      document.body.classList.add("go");

      const frame = (now) => {
        if (this.finished) {
          resolve();
          return;
        }

        const progress = Math.min(1, (now - startTime) / introTiming.dock);
        const eased = easeInOutQuart(progress);
        const target = this.dockTarget();

        bg.style.transform = `translateY(${-100 * eased}%)`;

        if (target) {
          // recomputed every frame so a resize mid-flight still lands exactly on the header logo
          const scale = 1 + (target.width / lockup.offsetWidth - 1) * eased;
          const x = (target.left - lockup.offsetLeft) * eased;
          const y = (target.top - lockup.offsetTop) * eased;

          lockup.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
        } else {
          lockup.style.transform = `translateY(${-45 * eased}vh) scale(${1 - 0.4 * eased})`;
          lockup.style.opacity = String(1 - eased);
        }

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      };

      requestAnimationFrame(frame);
    });
  }

  finish() {
    if (this.finished) {
      return;
    }

    this.finished = true;
    document.body.classList.add("go", "intro-done");
    this.intro.classList.add("done");
    this.onDone?.();
  }
}

class PageEffects {
  constructor() {
    this.nav = $("#nav");
    this.progressBar = $("#bar");
    this.glow = $("#glow");
    this.lastScrollY = 0;
    this.glowX = innerWidth / 2;
    this.glowY = 300;
    this.targetGlowX = this.glowX;
    this.targetGlowY = this.glowY;
  }

  start() {
    this.bindMenu();
    this.bindIntro();
    this.bindRevealAnimations();
    this.bindNavigationEffects();
    this.bindGlow();
    this.bindMagneticButtons();
  }

  toggleMenu(shouldOpen) {
    const isOpen =
      typeof shouldOpen === "boolean"
        ? shouldOpen
        : !document.body.classList.contains("menu");

    document.body.classList.toggle("menu", isOpen);
    $("#bm").setAttribute("aria-expanded", String(isOpen));
  }

  bindMenu() {
    $("#bm").addEventListener("click", () => this.toggleMenu());
    $("#scrim").addEventListener("click", () => this.toggleMenu(false));
    $$("#menu a").forEach((link) => {
      link.addEventListener("click", () => this.toggleMenu(false));
    });
    addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        this.toggleMenu(false);
      }
    });
  }

  bindIntro() {
    const intro = $("#intro");

    if (!intro) {
      document.body.classList.add("go", "intro-done");
      return;
    }

    new IntroSequence(intro).start();
  }

  bindRevealAnimations() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("vis");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 },
    );

    $$("[data-r]").forEach((element) => observer.observe(element));
  }

  bindNavigationEffects() {
    addEventListener(
      "scroll",
      () => {
        const scrollY = window.scrollY;
        const scrollableHeight =
          document.documentElement.scrollHeight - innerHeight;

        this.progressBar.style.transform = `scaleX(${scrollY / scrollableHeight})`;
        this.nav.classList.toggle("s", scrollY > 40);
        this.nav.classList.toggle(
          "h",
          scrollY > this.lastScrollY && scrollY > 300,
        );
        this.lastScrollY = scrollY;
      },
      { passive: true },
    );
  }

  bindGlow() {
    addEventListener("pointermove", (event) => {
      this.targetGlowX = event.clientX;
      this.targetGlowY = event.clientY;
    });

    const animateGlow = () => {
      this.glowX += (this.targetGlowX - this.glowX) * 0.08;
      this.glowY += (this.targetGlowY - this.glowY) * 0.08;
      this.glow.style.transform = `translate(${this.glowX}px,${this.glowY}px)`;
      requestAnimationFrame(animateGlow);
    };

    animateGlow();
  }

  bindMagneticButtons() {
    if (prefersReducedMotion) {
      return;
    }

    $$(".mag").forEach((button) => {
      button.addEventListener("pointermove", (event) => {
        const bounds = button.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.25;
        const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.35;

        button.style.transform = `translate(${offsetX}px,${offsetY}px)`;
      });
      button.addEventListener("pointerleave", () => {
        button.style.transform = "";
      });
    });
  }
}

const slider = new ReleaseSlider(releases);
const player = new AudioPreviewPlayer(releases, slider);
slider.setPlayer(player);
new LandingPage(releases, popularReleases, artists, slider, player);
new PageEffects().start();
