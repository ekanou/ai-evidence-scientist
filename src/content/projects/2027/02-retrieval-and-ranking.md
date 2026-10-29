---
edition: 2027
order: 2
title: Retrieval and ranking
stage: screening
areas: [3, 7]
question: Can screening judge each eligibility requirement separately, and tell “the study does not meet it” apart from “the text does not say”?
---

Screening studies for a systematic review takes considerable time. Automated systems can help, but they must not exclude relevant studies just because some information is missing. MedSR-Copilot screens titles, abstracts and full texts, then ranks the remaining studies to decide which ones to process further. Its screening decisions, however, do not always distinguish between "the study does not meet a requirement" and "the available text does not tell us".

For example, a review may require adult participants, a randomised controlled trial, drug A versus placebo, and at least 12 weeks of follow-up. An abstract may clearly meet the first three requirements but say nothing about follow-up. Excluding it could lose an eligible study that followed participants for 16 weeks. Including it without checking could admit a study with only eight weeks of follow-up. A better approach is to mark the follow-up requirement as unknown and check the full text.

This motivates a model that assesses each requirement separately, reports its uncertainty, and helps decide which studies need further checking.
