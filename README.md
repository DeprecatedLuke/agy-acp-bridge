# agy-acp-bridge

omp plugin that takes over the stream of omp's built-in `antigravity-cli` provider, which drives Google's official `agy acp` server.

- agy keeps its own system prompt. The `t3code` agent runs with `tools: []`, so agy's native tools are off.
- omp's tools reach agy only as MCP tools, named `mcp_ide-tools_<name>`.
- omp's system prompt is sent as a `<system-reminder>` block in the conversation, not appended to agy's system prompt. It is re-sent when it changes.
- A call to any tool omp does not provide returns `This tool is unavailable.` as a failed tool result; the turn continues.
- Sets `prompt-perturbation` for `antigravity-cli` models.

Sign-in, credential staging, the agy binary and conversation checkpoints come from omp's built-in provider.

## Install

```sh
git clone https://github.com/DeprecatedLuke/agy-acp-bridge.git
omp plugin link ./agy-acp-bridge
```

Then sign in with `/login` (Antigravity CLI) and pick an `antigravity-cli/<model>`.

Do not install it on a client whose `antigravity-cli` provider routes through an omp auth-gateway: the plugin runs agy locally and would bypass the gateway.
