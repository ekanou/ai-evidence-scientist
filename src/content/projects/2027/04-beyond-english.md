---
edition: 2027
order: 4
title: Evidence beyond English
stage: search
areas: [1]
question: Do conclusions change when an agent also searches and screens non-English sources?
background: Multilingual NLP, machine translation
---

**In eight weeks.** Add cross-lingual query translation and screening to a baseline agent. On a set of reviews, compare the studies found and the pooled estimates with and without non-English sources.

**As a thesis.** Multilingual extraction from full texts, and how translation errors propagate into eligibility decisions and extracted data.

**Starting data.** Few collections label non-English studies. [Cohen et al.'s drug-class reviews](https://dmice.ohsu.edu/cohenaa/systematic-drug-class-review-data.html) are the exception, with an explicit foreign-language exclusion code. Otherwise, derive language from PubMed and OpenAlex metadata. [TrialPanorama](https://huggingface.co/datasets/TrialPanorama/TrialPanorama-database) covers 15 trial registries, including Chinese and European ones. Language bias is a known threat to review validity ([Higgins et al., 2024](#ref-cochrane-handbook)).
