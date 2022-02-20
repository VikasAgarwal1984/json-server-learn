import * as jsonServer from "json-server";
import { Routes } from "./routes";

export class Server {
  start() {
    const routes = new Routes().getRoutes();
    const server = jsonServer.create();
    const router = jsonServer.router(routes);
    const middlewares = jsonServer.defaults();
    // Set default middlewares (logger, static, cors and no-cache)
    server.use(middlewares);

    // Add custom routes before JSON Server router
    server.get("/echo", (req: any, res: any) => {
      res.jsonp(req.query);
    });

    // To handle POST, PUT and PATCH you need to use a body-parser
    // You can use the one used by JSON Server
    server.use(jsonServer.bodyParser);
    server.use((req: any, res: any, next: any) => {
      if (req.method === "POST") {
        req.body.createdAt = Date.now();
      }
      // Continue to JSON Server router
      next();
    });

    // Use default router
    server.use(router);

    server.listen(3000, () => {
      console.log(
        "JSON Server is running on port 3000",
        "http://localhost:3000"
      );
    });
  }
}
