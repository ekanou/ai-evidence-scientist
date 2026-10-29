---
edition: 2027
order: 1
title: Query formulation
stage: search
areas: [1]
question: Can a model that probes the database while it writes a Boolean query retrieve the relevant studies with higher recall than one that writes the query in a single pass?
---

Given a systematic review topic, generate Boolean queries that retrieve the relevant studies from databases such as PubMed with high recall. Previous work generates the query in a single pass, through prompting, fine-tuning or reinforcement learning (for example DeepRetrieval). Our model instead probes the database during generation. It issues sub-queries and uses the returned hit counts and documents to refine terms and their combinations step by step, much as an expert searcher does.

The project includes training the probing policy with retrieval-based rewards. The generated queries are evaluated by recall, precision and F-measure on systematic review benchmarks (CLEF TAR, CSMeD), against both expert-written and LLM-generated queries.
