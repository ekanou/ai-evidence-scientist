---
edition: 2027
order: 8
title: Risk of bias and reviewer disagreement
stage: screening
areas: [3]
question: Trained reviewers disagree on risk-of-bias judgments. Should a model predict one label, or the disagreement?
background: Machine learning, NLP, annotation
---

**In eight weeks.** Use risk-of-bias judgments where reviews report them per reviewer, or collect a small double-annotated set with methodologists. Train and prompt models to predict label distributions, and compare them with single-label models on calibration.

**As a thesis.** Evaluation that credits a model for matching the spread of expert judgment, and what that does to certainty-of-evidence ratings.

**Starting data.** [RoBIn](https://github.com/phdabel/robin) has about 17,000 risk-of-bias judgments with evidence spans, including trials that different Cochrane reviews judged differently. [ROBoto2](https://github.com/larchlab/ROBoto2) has RoB 2 assessments with signalling-question answers and some repeated assessments of the same paper. [RoBBR](https://huggingface.co/datasets/RoBBR-Benchmark/RoBBR) is a further benchmark under a non-commercial licence. The guidance itself is in the Cochrane Handbook ([Higgins et al., 2024](#ref-cochrane-handbook)).
