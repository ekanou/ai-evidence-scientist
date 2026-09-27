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

**Starting data.** The CLEF TAR collections ([Kanoulas et al., 2017](#ref-kanoulas-2017), [2018](#ref-kanoulas-2018), [2019](#ref-kanoulas-2019)), whose later tasks give the protocol without a query; [94 reviews with their published queries](https://github.com/ielab/SIGIR2017-SysRev-Collection); [40 topics with seed studies and search dates](https://github.com/ielab/sysrev-seed-collection); [Webis-SR4ALL-26](https://doi.org/10.5281/zenodo.18431942), about 300,000 reviews with their reported search strategies; and [LEADSInstruct](https://huggingface.co/datasets/zifeng-ai/LEADSInstruct), which links reviews to both publications and ClinicalTrials.gov trials. [LLM query-generation baselines](https://github.com/ielab/Boolean_Generation_Reproduce) can be re-run on these.
