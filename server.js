import http from "node:http";
import { server as wisp } from "@mercuryworkshop/wisp-js/server";

const s = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("wisp ok");
});

s.on("upgrade", (req, socket, head) => {
  wisp.routeRequest(req, socket, head);
});

s.listen(process.env.PORT || 8080);
