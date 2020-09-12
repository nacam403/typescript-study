import express from "express";

export async function createApp() {
  const app = express();

  app.get("/health", (_req, res) => {
    res.send("OK");
  });

  return app;
}
