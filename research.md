---
layout: default
title: Research
permalink: /research/
---

<div class="main-content research-page" markdown="1">

# Research

<div class="research-intro">
  <figure>
    <img src="{{ '/assets/images/research/tappai-pillars.svg' | relative_url }}"
         alt="Trustworthy, Agentic, Performant and Physical AI shown as four quadrants of one ellipse meeting at a shared centre labelled Real-world AI, where all four are required.">
  </figure>

  <div class="research-intro-text" markdown="1">
Artificial intelligence is moving out of the benchmark and into the world: into hospitals, factories, power grids, laboratories, and vehicles. That move changes what counts as progress. A model that is merely accurate is not enough; it has to be reliable when data shifts, capable of acting on its own without losing the plot, efficient enough to run where it is needed, and grounded in physical reality.

TAPPAI organizes its work around these four demands. Each is a research program in its own right, and each is strongest where it overlaps with the others.
  </div>
</div>

---

<a id="trustworthy-ai"></a>
<div class="pillar-head trustworthy">
  {% include icons/icon-trustworthy.svg %}
  <div class="heading-text"><h2>Trustworthy AI</h2><h3>Systems that know their limits</h3></div>
</div>

Trust is a property you design in, measure, and verify, not a disclaimer added to a finished model. We build systems that recognize inputs they should not answer, quantify their own uncertainty, and carry guarantees that survive deployment — spanning out-of-distribution detection built on typicality rather than blocklists, Bayesian evaluation for reasoning models, formal verification of fairness and safety properties, causal grounding that separates mechanism from correlation, defenses across the model supply chain, privacy-preserving analysis of clinical and genomic data, and real-time anomaly detection on production infrastructure. We are working toward verification and uncertainty quantification that scale to agentic systems, so that guarantees hold across a chain of autonomous decisions and not just a single prediction.

{% include research-paper-slider.html pillar="trustworthy" match_tags="trustworthy-ai" filter_slug="trustworthy-ai" limit=9 %}

---

<div class="pillar-head agentic">
  {% include icons/icon-agentic.svg %}
  <div class="heading-text"><h2>Agentic AI</h2><h3>Systems that act</h3></div>
</div>

The interesting failures of AI are no longer single wrong answers but long trajectories, where an agent retrieves the wrong evidence, commits to it, and compounds the error over twenty steps. We study agents as systems — how they reason, retrieve, use tools, coordinate, and fail — and build the scaffolding that makes autonomy dependable: inference-time control of reasoning, retrieval restructured around causal and hierarchical knowledge graphs, deep research agents that do real scientific and engineering work, neuro-symbolic methods that pair language models with formal verification, and guardrails treated as a distribution problem rather than a pattern-matching one. Our aim is agents that carry an explicit account of what they know, what they assume, and when to stop, and scientific agents that can be trusted to run an experiment end to end.

{% include research-paper-slider.html pillar="agentic" match_tags="agentic-ai,artificial-intelligence" filter_slug="artificial-intelligence" limit=9 %}

---

<a id="high-performance-computing"></a>
<a id="quantum-computing"></a>
<div class="pillar-head performant">
  {% include icons/icon-performant.svg %}
  <div class="heading-text"><h2>Performant AI</h2><h3>Systems that scale</h3></div>
</div>

Capability that cannot be afforded is capability that will not be deployed, so our work runs the full stack: lossless and near-lossless compression, asymmetric KV-cache quantization and structured pruning, hardware-aware kernels and sparse attention scheduling, performance models that forecast distributed training cost before provisioning, and memory-efficient training and adaptation. Through national efforts including the NSF ICICLE institute, we treat edge devices, clusters, cloud, supercomputers, and quantum processors as a single continuum rather than separate worlds, with circuit cutting, parallel job scheduling, and hardware-aware synthesis preparing for the point when quantum resources join it. The goal is an execution stack where efficiency, reliability, and energy cost are first-class design objectives rather than afterthoughts, putting frontier capability within reach of a clinic, a classroom, or a single lab.

<figure>
  <img src="{{ '/assets/images/research/tappai-continuum.svg' | relative_url }}"
       alt="A single band running from sensors and edge devices through lab clusters, cloud and national supercomputers to quantum processors. Workloads and data move toward compute; trained models and capability move back out.">
  <figcaption>We treat edge devices, clusters, cloud, supercomputers, and quantum processors as one continuum rather than separate worlds.</figcaption>
</figure>

{% include research-paper-slider.html pillar="performant" match_tags="high-performance-computing,hpc,quantum-computing" filter_slug="high-performance-computing" limit=9 %}

---

<a id="healthcare-medical-imaging"></a>
<div class="pillar-head physical">
  {% include icons/icon-physical.svg %}
  <div class="heading-text"><h2>Physical AI</h2><h3>Systems that meet the world</h3></div>
</div>

Physical AI is where the other three are tested: sensors are noisy, environments shift, latency is a safety property, and the cost of being wrong is measured in something other than accuracy points. We work on perception, spatial reasoning, and embodied decision-making — closing the spatial reasoning gap in vision-language models, real-time trajectory prediction for autonomous vehicles, zero-shot and unsupervised segmentation of 3D medical images with clinical partners, automated characterization for materials science, speech and hearing research including multilingual assessment materials, and vision models restructured to run within the latency and energy budgets of embedded hardware. We are building toward foundation models for the physical world that are grounded in measurement, calibrated about their own uncertainty, and efficient enough to run on the device that has to act.

{% include research-paper-slider.html pillar="physical" match_tags="computer-vision,medical-imaging,autonomous-driving,materials-science" filter_slug="computer-vision" limit=9 %}

---

<a id="artificial-intelligence"></a>

## Where the four meet

The pillars are a way to organize the work, not to partition it. A surgical robot needs all four. So does an autonomous laboratory, a grid controller, or a diagnostic assistant. Our research concentrates where they intersect. The map below shows where each program is established, where it is growing, and where we have chosen not to work yet.

<figure>
  <img src="{{ '/assets/images/research/tappai-matrix.svg' | relative_url }}"
       alt="A grid of the four research pillars against six application domains, showing which combinations are established programmes, which are active and growing, and which are not a current focus.">
</figure>

TAPPAI brings together faculty and researchers spanning AI and machine learning, high-performance and quantum computing, computer vision, data management, software engineering and formal verification, privacy and security, and applied domain science, with national collaborations including the NSF ICICLE institute, NSF OH-SCIPE, and the Center for Materials Data Science for Stockpile Stewardship.

**Interested in working with us?** [Meet the team]({{ '/faculty' | relative_url }}) · [Browse publications and code]({{ '/publications' | relative_url }})

</div>

<script src="{{ '/assets/js/pillar-slider.js' | relative_url }}"></script>