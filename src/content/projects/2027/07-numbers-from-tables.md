---
edition: 2027
order: 7
title: Numbers from tables and figures
stage: screening
areas: [3]
question: How reliably can models extract the numbers a meta-analysis needs from text, tables and plots?
background: Document AI, multimodal models
---

**In eight weeks.** Build a pipeline that extracts outcome data (event counts, means, standard deviations, effect estimates) from full-text PDFs, and compare it with the data extracted in published reviews.

**As a thesis.** Extraction from figures such as forest plots, and carrying extraction uncertainty through to the pooled estimate.

**Starting data.** [Yun et al. (2024)](https://github.com/hyesunyun/llm-meta-analysis) provide 120 trials with gold event counts, means and standard deviations, and their full texts. [Cochrane study-level outcome data](https://osf.io/xjv9g/) holds about 400,000 study-outcome rows extracted by Cochrane reviewers, enough to re-pool meta-analyses and see which errors move the estimate. For forest plots, [CochraneForest](https://aclanthology.org/2025.acl-long.1359/) describes 202 annotated plots, but its data could not be located; ask the authors.
