---
edition: 2027
order: 6
title: Eligibility decisions with evidence
stage: screening
areas: [3]
question: Can an agent make full-text eligibility decisions that cite the passage that decides each one?
background: NLP, information extraction
---

**In eight weeks.** Build a full-text screener that returns a decision for each eligibility criterion, with the supporting text spans. Check both the decisions and whether the cited spans actually support them.

**As a thesis.** Use span-level evidence to route uncertain decisions to a human; see [Spending human effort well](#spending-human-effort-well).

**Starting data.** [CSMeD-FT](https://github.com/WojciechKusa/systematic-review-datasets) has 3,333 full-text eligibility decisions from 213 Cochrane reviews, each exclusion with a free-text reason. [Evidence Inference 2.0](https://github.com/jayded/evidence-inference) has full-text trials where doctors marked the evidence behind each finding, often with two or more annotators. No dataset gives gold evidence for each eligibility criterion, so expect a small annotation effort.
