---
edition: 2027
order: 13
title: Spending human effort well
stage: systems
areas: [7]
question: Given a fixed number of human judgments, where should they go?
background: Information retrieval, active learning, human–computer interaction
---

**In eight weeks.** Simulate the four workflow conditions (screen until stopping, a fixed human budget, a budget then machine completion, and model-routed selective review), with gold labels standing in for human reviewers. Plot review quality against human and computational cost. This builds on [Cormack and Grossman (2014)](#ref-cormack-2014) and [Yang et al. (2021)](#ref-yang-2021).

**As a thesis.** Routing policies that decide in real time, and a study with reviewers to test the simulation's assumptions.

**Starting data.** For simulation: the CLEF TAR collections ([Kanoulas et al., 2017](#ref-kanoulas-2017), [2018](#ref-kanoulas-2018), [2019](#ref-kanoulas-2019)), [CSMeD](https://github.com/WojciechKusa/systematic-review-datasets), [SYNERGY](https://github.com/asreview/synergy-dataset) and [Chan et al.'s](https://data.mendeley.com/datasets/7sgmg89zb6/1) 8,608 Cochrane reviews. Eligibility decisions come from [Eligibility decisions with evidence](#eligibility-decisions-with-evidence). No public data records reviewers' time per record, so human effort is simulated.
