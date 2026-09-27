---
edition: 2027
order: 1
title: Frozen collections and review/update pairs
stage: infrastructure
areas: [1, 5]
question: Can we rebuild the literature as it stood on a review's search date, and turn a review and its update into a task with a checkable answer?
background: Data engineering, information retrieval
---

**In eight weeks.** Select review/update pairs published after current model training cutoffs. Build a pipeline that snapshots bibliographic records, trial registrations and preprints by date. For each pair, record what the update changed: the direction of the pooled effect, whether it crossed a decision threshold, and the certainty of evidence.

**As a thesis.** Scale the pipeline, measure how completely a snapshot reproduces what the original reviewers could have found, and work with methodologists on the adjudication protocol.

**Starting data.** [MedChangeQA](https://github.com/jvladika/MedChange) marks 512 questions whose conclusion flipped between versions of a Cochrane review; its labels are LLM-generated and record direction only. [Alharbi and Stevenson](https://github.com/Amal-Alharbi/Systematic_Reviews_Update) provide 25 review/update pairs with queries and included studies, and [Chan et al.](https://data.mendeley.com/datasets/7sgmg89zb6/1) reproduced the searches of 22 recent reviews. For date-bounded snapshots: PubMed's record-creation dates, the version history of ClinicalTrials.gov records (via [cthist](https://CRAN.R-project.org/package=cthist)), and [OpenAlex snapshots](https://help.openalex.org/download/snapshot-format). No public dataset records what an update changed in effect size, thresholds and certainty together; building that is this project's contribution. Every other project uses what it produces.
