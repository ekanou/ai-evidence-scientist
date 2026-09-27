---
edition: 2027
order: 5
title: Stopping early and searching for confirmation
stage: stopping
areas: [2]
question: When should an agent stop searching, can it justify the decision, and does it stop once it finds the answer it expected?
background: Information retrieval, statistics, LLM agents
---

**In eight weeks.** Compare three kinds of stopping rule on the same runs: the agent's own confidence, statistical rules that target a recall level, and rules that stop once the pooled estimate stops moving. Report recall, cost and conclusion stability for each. Then give the agent an expected answer in its prompt, and measure how its queries and stopping point shift compared with a neutral run. Agent confidence is known to be a weak signal once retrieved text is in context ([Soudani et al., 2025](#ref-soudani-2025)).

**As a thesis.** Either stopping rules that state the risk of a changed conclusion rather than only a recall target, or mitigations for confirmation search, such as an explicit search for disconfirming evidence, and whether they change the conclusions agents reach.

**Starting data.** Existing technology-assisted review collections for screening; review/update pairs for conclusion stability; the baseline agent from [An open action log and a baseline agent](#an-open-action-log-and-a-baseline-agent).
