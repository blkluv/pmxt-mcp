// api/mcp.js
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { createServer } from "../src/server.js";
import { loadConfig } from "../src/config.js";

const config = loadConfig();
const server = createServer(config);

export default async function handler(req, res) {
  // Set up SSE transport for this request
  const transport = new SSEServerTransport("/messages", res);
  await server.connect(transport);
  // Keep the connection open (Vercel may time out after 60s)
}
