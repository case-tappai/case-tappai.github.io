---
layout: default
title: Publications & Code
---

<div class="main-content">
  <div class="publications-section">
    <h1>Publications & Code</h1>

    <!-- FILTER BUTTONS AND DROPDOWN -->
    <div class="filters-container">
      <div class="paper-filters">
        <span class="filter-label">Filter by research area:</span>
        <button class="filter-btn active" data-filter="all" onclick="filterPapers('all', this)">All Papers</button>
        <button class="filter-btn" data-filter="trustworthy-ai" onclick="filterPapers('trustworthy-ai', this)">Trustworthy AI</button>
        <button class="filter-btn" data-filter="artificial-intelligence" onclick="filterPapers('artificial-intelligence', this)">Artificial Intelligence</button>
        <button class="filter-btn" data-filter="high-performance-computing" onclick="filterPapers('high-performance-computing', this)">High Performance Computing</button>
        <button class="filter-btn" data-filter="quantum-computing" onclick="filterPapers('quantum-computing', this)">Quantum Computing</button>
        <button class="filter-btn" data-filter="computer-vision" onclick="filterPapers('computer-vision', this)">Computer Vision</button>
        <button class="filter-btn" data-filter="medical-imaging" onclick="filterPapers('medical-imaging', this)">Medical Imaging</button>
        <button class="filter-btn" data-filter="materials-science" onclick="filterPapers('materials-science', this)">Materials Science</button>
        <button class="filter-btn" data-filter="data-science" onclick="filterPapers('data-science', this)">Data Science</button>
      </div>

      <div class="year-filter-container">
        <label for="year-select" class="filter-label">Filter by year:</label>
        <select id="year-select" class="year-select" onchange="filterByYear(this.value)">
          <option value="all">All Years</option>
          {% assign all_years = site.papers | map: "year" | uniq | sort | reverse %}
          {% for year in all_years %}
            <option value="{{ year }}">{{ year }}</option>
          {% endfor %}
        </select>
      </div>
    </div>

    <!-- PAPERS GROUPED BY YEAR -->
    {% assign papers_by_year = site.papers | sort: "year" | reverse | group_by: "year" %}

    {% for year_group in papers_by_year %}
    <div class="papers-year-group" data-year="{{ year_group.name }}">
      <h2 class="year-heading">{{ year_group.name }}</h2>

      <div class="papers-list">
      {% assign sorted_papers = year_group.items | sort: "title" %}
      {% for paper in sorted_papers %}

        <div class="paper-item" data-areas="{% for area in paper.research_areas %}{{ area | slugify }}|{% endfor %}">
          {% include research-paper-card.html paper=paper %}
        </div>

        {% endfor %}
      </div>
    </div>
    {% endfor %}

  </div>
</div>

<script src="{{ '/assets/js/paper-filters.js' | relative_url }}"></script>