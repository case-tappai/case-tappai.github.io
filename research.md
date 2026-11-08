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
Artificial intelligence is moving out of the benchmark and into the world — into hospitals, factories, power grids, laboratories, and vehicles. That move changes what counts as progress. A model that is merely accurate is not enough; it has to be reliable when the data shifts, capable of acting on its own without losing the plot, efficient enough to run where it is needed, and grounded in physical reality.

TAPPAI organizes its work around those four demands. Each is a research program in its own right, and each is strongest where it overlaps with the others.
  </div>
</div>

---

<a id="trustworthy-ai"></a>
<div class="pillar-head trustworthy">
  {% include icons/icon-trustworthy.svg %}
  <div class="heading-text"><h2>Trustworthy AI</h2><h3>Systems that know their limits</h3></div>
</div>

Trust is not a disclaimer bolted onto a finished model. It is a property you design in, measure, and verify. We build methods that let a system recognize inputs it should not answer, quantify its own uncertainty, resist adversaries, and carry guarantees that survive contact with deployment.

**Current directions**

- **Knowing the unknown.** Out-of-distribution and anomaly detection built on typicality rather than blocklists — learning what normal looks like so that novelty, jailbreaks, and synthetic content stand out on their own. Recent work in this line reduces false alarms by orders of magnitude and transfers across languages without retraining.
- **Evaluation you can bet on.** Benchmarks and metrics are infrastructure. We develop Bayesian and uncertainty-aware evaluation for reasoning models under test-time scaling, and expose where popular protocols produce unstable or misleading rankings.
- **Formal guarantees.** Verification of fairness and safety properties in neural networks and ML-enabled systems, including long-horizon effects such as feedback loops that only become visible after deployment.
- **Causal grounding.** Causal graphs and causal benchmarks that separate genuine mechanism from spurious correlation in retrieval, reasoning, and visual understanding.
- **Security and privacy.** Attack surfaces in the modern model supply chain — poisoned adapters, retrieval spoofing, weight extraction — alongside privacy-preserving frameworks deployed on real genomic and clinical data.
- **Trustworthy infrastructure.** Unsupervised, real-time anomaly detection on production HPC and AI system logs, where a false alert is expensive and a missed failure is worse.

<div class="heading-line" markdown="1">
**Where we're heading:** verification and uncertainty quantification that scale to agentic systems, so that guarantees hold not just for a single prediction but for a chain of autonomous decisions.
</div>

---

<div class="pillar-head agentic">
  {% include icons/icon-agentic.svg %}
  <div class="heading-text"><h2>Agentic AI</h2><h3>Systems that act</h3></div>
</div>

The interesting failures of AI are no longer single wrong answers. They are long trajectories: an agent that retrieves the wrong evidence, commits to it, and compounds the error over twenty steps. We study agents as systems — how they reason, retrieve, use tools, coordinate, and fail — and build the scaffolding that makes autonomy dependable.

**Current directions**

- **Reasoning and inference-time control.** Understanding what actually drives reasoning ability, including the role of long-context capacity, and using large models to guide small ones at inference time rather than through expensive retraining.
- **Knowledge for agents.** Retrieval-augmented generation restructured around causal and hierarchical knowledge graphs, so agents reason over relationships instead of surface similarity.
- **Agents that do real work.** Deep research agents for scientific and engineering workflows — for example, multi-step data curation pipelines that discover, synthesize, and annotate vision datasets with model consensus.
- **Neuro-symbolic and verified agency.** Coupling language models with formal methods: autoformalization, uncertainty taxonomies for generated specifications, and verification of coding agents and the software they produce.
- **Safety at the boundary.** Guardrails treated as a distribution problem rather than a pattern-matching problem, and red-teaming of the retrieval and tool interfaces agents depend on.

<div class="heading-line" markdown="1">
**Where we're heading:** agents that carry an explicit account of what they know, what they assume, and when to stop — and scientific agents that can be trusted to run an experiment end to end.
</div>

---

<a id="high-performance-computing"></a>
<a id="quantum-computing"></a>
<div class="pillar-head performant">
  {% include icons/icon-performant.svg %}
  <div class="heading-text"><h2>Performant AI</h2><h3>Systems that scale</h3></div>
</div>

Capability that cannot be afforded is capability that will not be deployed. Our performance work runs the full stack: algorithms, compilers and kernels, GPU and accelerator scheduling, distributed training, and the cyberinfrastructure that ties edge, cloud, and supercomputer into one continuum. The goal is not benchmark throughput for its own sake — it is putting frontier capability within reach of a clinic, a classroom, or a single lab.

<figure>
  <img src="{{ '/assets/images/research/tappai-continuum.svg' | relative_url }}"
       alt="A single band running from sensors and edge devices through lab clusters, cloud and national supercomputers to quantum processors. Workloads and data move toward compute; trained models and capability move back out.">
  <figcaption>We treat edge devices, clusters, cloud, supercomputers and quantum processors as one continuum rather than separate worlds.</figcaption>
</figure>

**Current directions**

- **Compression without compromise.** Lossless and near-lossless model compression, asymmetric KV-cache quantization, and structured pruning methods that deliver immediate, hardware-friendly savings.
- **Hardware-aware execution.** Sparse attention scheduling, irregular convolution deployment, and tile- and topology-aware optimization that align computation with real GPU behavior.
- **Predicting before provisioning.** Fine-grained performance models for distributed LLM training that forecast end-to-end cost across parallelization strategies without full-scale trial runs.
- **Efficient training and adaptation.** Memory-efficient fine-tuning, unbiased low-memory gradient estimation, and inference methods that cut latency and energy at the edge.
- **Intelligent cyberinfrastructure.** Through national efforts including the NSF ICICLE institute, plug-and-play "AI-as-a-Service" spanning the edge–cloud–HPC continuum, aimed squarely at democratizing access.
- **Quantum as an emerging accelerator.** Circuit cutting, parallel job scheduling across modular QPUs, hardware-aware synthesis, and transpilation — preparing for the point at which quantum resources join the same continuum.

<div class="heading-line" markdown="1">
**Where we're heading:** an execution stack where a model's efficiency, reliability, and energy cost are first-class design objectives rather than afterthoughts.
</div>

---

<a id="healthcare-medical-imaging"></a>
<div class="pillar-head physical">
  {% include icons/icon-physical.svg %}
  <div class="heading-text"><h2>Physical AI</h2><h3>Systems that meet the world</h3></div>
</div>

Physical AI is where the other three are tested. Sensors are noisy, environments shift, latency is a safety property, and the cost of being wrong is measured in something other than accuracy points. We work on perception, spatial reasoning, and embodied decision-making for robots, vehicles, instruments, and clinical imaging — and on the scientific domains where AI meets measurement.

**Current directions**

- **Spatial and embodied intelligence.** Diagnosing and closing the spatial reasoning gap in vision-language models, so that systems understand geometry, viewpoint, and 3D structure rather than describing pictures.
- **Autonomy in motion.** Real-time trajectory prediction and online learning for autonomous vehicles under strict latency budgets, and robotics platforms for embodied experimentation.
- **AI for medicine.** Zero-shot and unsupervised segmentation of 3D medical images, generative models for lesion detection, and spatial grounding for clinical vision-language models — developed with clinical partners and evaluated on clinical questions.
- **AI for materials and manufacturing.** Automated phase identification from synchrotron diffraction, defect segmentation, and distributed data-centric frameworks for materials data science at scale.
- **Sensing, speech, and human signals.** Speech synthesis and recognition evaluated for clinical audiology and hearing research, including multilingual assessment materials.
- **Efficiency at the edge.** Vision models restructured to compute only what matters, cutting latency and energy on embedded hardware without retraining.

<div class="heading-line" markdown="1">
**Where we're heading:** foundation models for the physical world that are grounded in measurement, calibrated about their own uncertainty, and efficient enough to run on the device that has to act.
</div>

---

<a id="artificial-intelligence"></a>

## Where the four meet

The pillars are a way to organize the work, not to partition it. A surgical robot needs all four. So does an autonomous laboratory, a grid controller, or a diagnostic assistant. Our research concentrates where they intersect — and the map below is honest about where a program is established, where it is growing, and where we have chosen not to work yet.

<figure>
  <img src="{{ '/assets/images/research/tappai-matrix.svg' | relative_url }}"
       alt="A grid of the four research pillars against six application domains, showing which combinations are established programmes, which are active and growing, and which are not a current focus.">
</figure>

TAPPAI brings together faculty and researchers spanning AI and machine learning, high-performance and quantum computing, computer vision, data management, software engineering and formal verification, privacy and security, and applied domain science, with national collaborations including the NSF ICICLE institute, NSF OH-SCIPE, and the Center for Materials Data Science for Stockpile Stewardship.

**Interested in working with us?** [Meet the team]({{ '/faculty' | relative_url }}) · [Browse publications and code]({{ '/publications' | relative_url }})

</div>