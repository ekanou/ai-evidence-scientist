---
edition: 2027
order: 2
title: An open action log and a baseline agent
stage: infrastructure
areas: [2, 6]
question: What does a complete, replayable record of an agent's review look like?
background: Software engineering, LLM agents
---

**In eight weeks.** Define the log format: searches, retrieved records, eligibility judgments with their evidence, human interventions and the stopping decision. Build a baseline agent that writes it, and a viewer that replays a run step by step.

**As a thesis.** Use the logs to find where runs go wrong, and compare agents on their process as well as their conclusions.

**Starting data.** The protocol of any published review. No public dataset releases agent trajectories for medical reviews, so the log format fills a gap. For tasks to run the baseline agent on, [MetaSyn](https://huggingface.co/datasets/THUIR/MetaSyn) gives 422 meta-analyses with protocol, included studies and conclusion, plus a shared PubMed corpus. Most agent projects build on this harness.
