---
# ==========================================================================
# PEAT AI LAB - PROFILE TEMPLATE (DETAILED)
# ==========================================================================
# INSTRUCTIONS: 
# 1. Fill in the values between the quotes. 
# 2. Delete rows you don't need (most are optional).
# 3. Save this file as "yourname-yourlastname.md"
# ==========================================================================

layout: profile               # REQUIRED: Do not change this
name: "Kai Ye"             # REQUIRED: Your name as it should appear
slug: "kai-ye"            # REQUIRED: Your name in lowercase with hyphens (e.g., "jane-doe")
type: "researcher"            # REQUIRED: Options are "faculty" or "researcher"
level: "STAFF"                  # REQUIRED: Options are "STAFF", "PHD", "MS", or "UG". This is used for filtering and display purposes.
role: "AI Scientist"            # REQUIRED: e.g., "PhD Student" or "AI Researcher". This appears under your name on the profile page.

# --- CONTACT & SOCIALS (Highly Recommended) ---
email: "KaiYe@case.edu"
personal_site: "https://flynnye.github.io/"             # URL to your personal site/portfolio or university directory
linkedin: "https://www.linkedin.com/in/kai-ye-86a554273/"                  # Full URL
google_scholar: "https://scholar.google.com/citations?user=k6mAT9AAAAAJ&hl=en&view_op=list_works&sortby=pubdate"            # Full URL

# --- PROFILE PHOTO ---
# Place your photo in /assets/images/ and link the path here. 
# If left blank, a default avatar will be used.
image: "/assets/images/kai-ye.jpg" 

# --- BIOGRAPHY TABS ---
# 'intro' appears at the top of the page permanently.
# 'bio' appears in the dedicated "Bio" tab.
# You can use Markdown [Links](https://example.com) in these sections.

intro: |
  I am an AI Scientist in the Department of Computer and Data Sciences at Case Western Reserve University. My research develops trustworthy, uncertainty-aware machine learning methods for high-stakes AI systems, including biomedical data analysis, large language models (LLMs), and vision-language-action (VLA) models for robotic-arm manipulation.
    
bio: |
  I am an AI Scientist in the Department of Computer and Data Sciences at Case Western Reserve University. My research develops trustworthy, uncertainty-aware machine learning methods for high-stakes AI systems. I received my Ph.D. in Electrical and Computer Engineering from the University of Pittsburgh in 2025, where my research focused on trustworthy machine learning and AI for health. At CWRU, I have extended this work to large language models (LLMs) and vision-language-action (VLA) models for robotic-arm manipulation.



# --- RESEARCH & PUBLICATIONS ---
# 'research_summary' appears at the top of the Research tab.
research_summary: "Trustworthy, uncertainty-aware machine learning for LLMs, vision-language-action (VLA) models, and biomedical data."
# 'projects' appear in the Research tab. 
# 'related_papers' must match the 'name' field in your paper .md files.
projects:
  - name: "Trustworthy Large Language Models"
    description: "This project develops uncertainty estimation and calibration methods that make large language models reliable enough for high-stakes deployment. The aim is for models to know what they don't know — producing calibrated confidence, flagging unreliable generations, and abstaining rather than returning confidently wrong answers."
    related_papers:
    
  - name: "Vision-Language-Action (VLA) Models for Robotic-Arm Manipulation"
    description: "This project extends uncertainty-aware machine learning to vision-language-action (VLA) models for robotic-arm manipulation, where overconfident predictions translate into physical risk. The focus is on quantifying uncertainty over predicted actions and conditioning execution on model confidence, improving the safety and robustness of language-conditioned control."
    related_papers:

# --- TEAM, MENTORS & COLLABORATORS ---
# mentors: For students, list your advisor's slug (e.g., ["vipin-chaudhary"])
# collaborators: List slugs of people you collaborate with inside the lab
mentors: ["vipin-chaudhary"]
collaborators: [""]

# --- ADDITIONAL INFO (Optional) ---
education:
  - "B.S, Electrical Engineering, Wuhan University, 2019"
  - "M.S., Computer Science, Wuhan University, 2022"
  - "Ph.D., Electrical and Computer Engineering, University of Pittsburgh, 2025"
awards:
  - "MICCAI STAR Award, 2023"
teaching_interests: "Teaching Assistant of 'Algorithmic Thinking' (Fall 2024, Spring 2025) at University of Pittsburgh. Guest Lecturer and Co-Designer of 'Neural Signal Modeling and Analysis' (Fall 2023, Fall 2024) at University of Pittsburgh"
---