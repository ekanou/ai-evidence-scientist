---
edition: 2027
order: 9
title: Outcome-aware evaluation metrics
stage: evaluation
areas: [4]
question: How much does a missed study cost, given what else was found?
background: Statistics, meta-analysis, IR evaluation
---

**In eight weeks.** Re-run meta-analyses with studies removed, the way a screening system would miss them, and build metrics that score a run by whether the conclusion changes: its direction, a decision threshold, its certainty. This builds on [Norman et al. (2019)](#ref-norman-2019) and [Kusa et al. (2023)](#ref-kusa-2023).

**As a thesis.** Rank systems under different assumed prices of a missed study, and report how the rankings change.

**Starting data.** [Cochrane study-level outcome data](https://osf.io/xjv9g/) for about 6,300 reviews, with an [R importer](https://github.com/schw4b/cochrane) for Cochrane review files; [metadat](https://cran.r-project.org/package=metadat) for prototyping. [Cao et al. (2025)](#ref-cao-2025) re-ran Cochrane reviews end to end, and plan to release their data on publication.
