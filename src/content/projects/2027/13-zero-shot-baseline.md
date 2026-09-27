---
edition: 2027
order: 13
title: Leakage and the zero-shot baseline
stage: evaluation
areas: [5]
question: How much of a review's conclusion can a model predict without retrieving anything?
background: NLP, LLM evaluation
---

**In eight weeks.** Ask models for the conclusion of each review and its update from the protocol alone. Compare reviews published before and after the models' training cutoffs, and implement the score that credits systems only for improvement over this baseline.

**As a thesis.** Probe models for memorisation of specific reviews, and make the baseline robust across model families.

**Starting data.** Review/update pairs from [Frozen collections and review/update pairs](#frozen-collections-and-reviewupdate-pairs), with older reviews as a contrast set.
