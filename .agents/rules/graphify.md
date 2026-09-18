---
trigger: always_on
description: Consult the graphify knowledge graph at graphify-out/ for codebase and architecture questions.
---

## graphify

This project has a graphify knowledge graph at graphify-out/.

Rules:
- Memory & Token Reduction: Use graphify as the primary codebase memory. Instead of reading or grepping multiple large files (which consumes substantial tokens), query the knowledge graph first.
- Execution: graphify is installed at `/Users/reza/.local/bin/graphify` (requires BypassSandbox: true if executed as CLI outside the sandbox).
- For codebase or architecture questions, when `graphify-out/graph.json` exists, run `/Users/reza/.local/bin/graphify query "<question>"` (or inspect `graphify-out/graph.json` directly). Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts.
- If `graphify-out/GRAPH_REPORT.md` exists, consult it for high-level structure.
- After modifying code files in this session, run `/Users/reza/.local/bin/graphify update .` to keep the knowledge graph current (AST-only, fast, zero LLM cost).
- For Q&A memory feedback loops, use `graphify save-result` and `graphify reflect`.
