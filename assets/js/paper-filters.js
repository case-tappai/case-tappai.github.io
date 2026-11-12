// Paper Filtering Module
// Handles filtering logic for papers across the site

let currentAreaFilter = 'all';
let currentYearFilter = 'all';

function filterPapers(filter, btnElement) {
  currentAreaFilter = filter;

  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => btn.classList.remove('active'));

  const targetBtn = btnElement || document.querySelector(`.filter-btn[data-filter="${filter}"]`);
  if (targetBtn) {
    targetBtn.classList.add('active');
  }

  applyCombinedFilters();
}

function filterByYear(year) {
  currentYearFilter = year;
  applyCombinedFilters();
}

function applyCombinedFilters() {
  const papers = document.querySelectorAll('.paper-item');
  const yearGroups = document.querySelectorAll('.papers-year-group');

  papers.forEach(paper => {
    const areas = paper.getAttribute('data-areas') || '';
    const yearGroup = paper.closest('.papers-year-group');
    const year = yearGroup ? yearGroup.getAttribute('data-year').trim() : '';

    const areaTokens = areas.split('|').filter(Boolean);
    const areaMatch =
      currentAreaFilter === 'all' ||
      areaTokens.includes(currentAreaFilter) ||
      (currentAreaFilter === 'high-performance-computing' && areaTokens.includes('hpc'));

    const yearMatch =
      currentYearFilter === 'all' ||
      String(year) === String(currentYearFilter);

    paper.style.display = areaMatch && yearMatch ? 'block' : 'none';
  });

  yearGroups.forEach(group => {
    const visibleInGroup = Array.from(group.querySelectorAll('.paper-item')).filter(
      p => p.style.display !== 'none'
    ).length;
    group.style.display = visibleInGroup === 0 ? 'none' : 'block';
  });
}

// Keep existing PaperFilters object for any pages initializing it directly
const PaperFilters = {
  init: function(options = {}) {
    const {
      containerId = null,
      paperSelector = '.paper-item',
      filterSelector = '.filter-btn',
      yearGroupSelector = '.papers-year-group',
      autoPopulateFilters = false,
      filterButtonsContainer = null
    } = options;

    const container = containerId ? document.getElementById(containerId) : document.body;
    const papers = container.querySelectorAll(paperSelector);

    if (autoPopulateFilters && filterButtonsContainer && papers.length > 0) {
      this.generateFilterButtons(papers, filterButtonsContainer);
    }

    const buttons = container.querySelectorAll(filterSelector);
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        const filter = this.getAttribute('data-filter');
        PaperFilters.applyFilter(filter, container, {
          paperSelector,
          yearGroupSelector,
          filterSelector
        });
        buttons.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
      });
    });
  },

  generateFilterButtons: function(papers, containerSelector) {
    const container =
      typeof containerSelector === 'string'
        ? document.querySelector(containerSelector)
        : containerSelector;
    if (!container) return;

    const areas = new Set();
    papers.forEach(paper => {
      const areasAttr = paper.getAttribute('data-areas') || '';
      areasAttr
        .split('|')
        .filter(area => area.trim())
        .forEach(area => areas.add(area));
    });

    Array.from(areas)
      .sort()
      .forEach(area => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.setAttribute('data-filter', area);
        button.textContent = this.slugToTitle(area);
        container.appendChild(button);
      });
  },

  applyFilter: function(filter, container, selectors = {}) {
    const {
      paperSelector = '.paper-item',
      yearGroupSelector = '.papers-year-group'
    } = selectors;

    const papers = container.querySelectorAll(paperSelector);
    papers.forEach(paper => {
      const areas = paper.getAttribute('data-areas') || '';
      paper.style.display = filter === 'all' || areas.includes(filter) ? 'block' : 'none';
    });

    const yearGroups = container.querySelectorAll(yearGroupSelector);
    if (yearGroups.length > 0) {
      yearGroups.forEach(group => {
        const visibleInGroup = group.querySelectorAll(
          paperSelector + '[style="display: block"]'
        ).length;
        group.style.display = visibleInGroup > 0 ? 'block' : 'none';
      });
    }
  },

  slugToTitle: function(slug) {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const areaParam = params.get('area');
  if (areaParam && document.querySelector('.publications-section')) {
    filterPapers(areaParam);
  }
});