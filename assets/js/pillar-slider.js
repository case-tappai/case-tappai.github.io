// Pillar Publications Slider
// Controls horizontal card pagination for each research pillar on /research/

const PillarSlider = {
  offsets: {},

  getVisibleCount() {
    if (window.innerWidth <= 576) return 1;
    if (window.innerWidth <= 992) return 2;
    return 3;
  },

  update(pillar) {
    const track = document.getElementById(`track-${pillar}`);
    if (!track) return;

    const slides = track.querySelectorAll('.pillar-slider-slide');
    const visible = this.getVisibleCount();
    const maxOffset = Math.max(0, slides.length - visible);

    if (this.offsets[pillar] === undefined) this.offsets[pillar] = 0;
    this.offsets[pillar] = Math.min(Math.max(0, this.offsets[pillar]), maxOffset);

    const stepPercent = 100 / visible;
    track.style.transform = `translateX(-${this.offsets[pillar] * stepPercent}%)`;

    // Update pagination dots
    const dotsContainer = document.getElementById(`dots-${pillar}`);
    if (dotsContainer) {
      const totalPages = Math.ceil(slides.length / visible);
      const currentPage = Math.round(this.offsets[pillar] / visible);
      dotsContainer.innerHTML = '';

      for (let i = 0; i < totalPages; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'slider-dot' + (i === currentPage ? ' active' : '');
        dot.setAttribute('aria-label', `Go to slide group ${i + 1}`);
        dot.addEventListener('click', () => {
          this.offsets[pillar] = Math.min(i * visible, maxOffset);
          this.update(pillar);
        });
        dotsContainer.appendChild(dot);
      }
    }
  },

  slide(pillar, direction) {
    const track = document.getElementById(`track-${pillar}`);
    if (!track) return;

    const slides = track.querySelectorAll('.pillar-slider-slide');
    const visible = this.getVisibleCount();
    const maxOffset = Math.max(0, slides.length - visible);

    const current = this.offsets[pillar] || 0;
    let next = current + direction * visible;
    if (next > maxOffset) next = current < maxOffset ? maxOffset : 0;
    if (next < 0) next = current > 0 ? 0 : maxOffset;

    this.offsets[pillar] = next;
    this.update(pillar);
  },

  initAll() {
    document.querySelectorAll('.pillar-papers-widget').forEach(widget => {
      const pillar = widget.getAttribute('data-slider-id');
      if (pillar) this.update(pillar);
    });
  }
};

// Expose global helper for inline onclick handlers in _includes/research-paper-slider.html
function slidePillarPapers(pillar, direction) {
  PillarSlider.slide(pillar, direction);
}

document.addEventListener('DOMContentLoaded', () => PillarSlider.initAll());
window.addEventListener('resize', () => PillarSlider.initAll());