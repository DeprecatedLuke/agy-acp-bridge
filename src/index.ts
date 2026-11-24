/**
 * agy-acp-bridge omp plugin.
 *
 * Takes over the stream of omp's built-in `antigravity-cli` provider (Google's
 * official `agy acp`): agy keeps its own system prompt and runs with no native
 * tools, omp's tools reach it only as MCP tools (`mcp_ide-tools_<name>`), omp's
 * system prompt is delivered as a `<system-reminder>` in the conversation, and
 * any tool omp does not provide answers "This tool is unavailable.".
 */
import type { ExtensionAPI } from "@oh-my-pi/pi-coding-agent";
import { streamAntigravityCli } from "./provider";

export default function agyAcpBridge(pi: ExtensionAPI): void {
	pi.registerProvider("antigravity-cli", {
		stream: (model, context, options) => streamAntigravityCli(model as never, context, options),
		rules: { "prompt-perturbation": true },
	});
}
