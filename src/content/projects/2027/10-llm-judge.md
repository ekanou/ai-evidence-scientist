---
edition: 2027
order: 10
title: Validating an LLM judge
stage: evaluation
areas: [4]
question: Can a model judge whether a synthesis reaches the right conclusion, as a methodologist would?
background: NLP, evaluation methodology
---

**In eight weeks.** Build an LLM judge that compares a submitted synthesis with the adjudicated update, and measure its agreement with methodologists on a sample of syntheses. Agreement with past system rankings is not enough.

**As a thesis.** Study where judge and experts disagree, and design judges that fluent but wrong syntheses cannot fool.

**Starting data.** Human judgments of generated review summaries from [Wang et al. (2023)](https://github.com/allenai/mslr-annotated-dataset), for pre-LLM systems, and [Shaib et al. (2023)](https://github.com/cshaib/summarizing-medical-evidence), for GPT-3. Reference conclusions come from [MedEvidence](https://huggingface.co/datasets/clcp/med-evidence) and [MedReview](https://github.com/ebmlab/MedReview). No public dataset rates modern LLM syntheses, so we will collect methodologist judgments ourselves.
