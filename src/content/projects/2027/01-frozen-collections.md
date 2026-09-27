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

**Starting data.** Published reviews and their updates; public bibliographic databases and trial registries. Every other project uses what this one produces.
