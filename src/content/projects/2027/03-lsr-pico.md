---
edition: 2027
order: 3
title: Learned sparse retrieval on PICO queries
stage: search
areas: [1]
question: Does treating the PICO components of a clinical question separately in learned sparse retrieval find more relevant studies than encoding the whole question as one query?
---

This project explores how PICO structure (population, intervention, comparison, outcome) can be built into learned sparse retrieval to improve the recall and efficiency of biomedical literature search. Using SPLADE as the main retrieval model, we will compare strategies for representing and combining PICO components: component-specific sparse representations, weighted vector aggregation, and multi-view candidate retrieval with fusion.

The aim is to understand whether treating PICO components separately identifies relevant studies better than conventional approaches that encode the complete clinical information need as a single query. The strategies are compared with BM25, dense retrieval and standard SPLADE on biomedical retrieval collections, using Recall@K at several retrieval depths.
