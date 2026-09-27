---
edition: 2027
order: 3
title: Agentic search and the recall denominator
stage: search
areas: [1, 4]
question: Given only a protocol, how well can an agent search several sources, and when every system writes its own queries, what should its recall be measured against?
background: Information retrieval, IR evaluation, NLP
---

**In eight weeks.** Build agents that turn a protocol into queries for bibliographic databases and trial registries, and compare their queries with the published search strategies. Build a pooled, query-independent reference set from the union of the agents' runs and the studies the published review included. Then measure how the ranking of search strategies changes with pool depth and with which runs contribute to the pool.

**As a thesis.** Either iterative search, where the agent reformulates from what it has already found under a fixed query budget, or estimating how many relevant studies no system found and how much uncertainty that adds to every recall figure.

**Starting data.** Published reviews that report their search strategies and included studies; existing technology-assisted review collections ([Kanoulas et al., 2017](#ref-kanoulas-2017), [2018](#ref-kanoulas-2018), [2019](#ref-kanoulas-2019)).
