import express from "express";
import { MongoClient } from "mongodb";

const mongoUri = "TBD";
const client = new MongoClient(mongoUri);

export async function createApp() {
  await client.connect();
  const pingResult = await client.db("myDB").command({ ping: 1 });
  console.log(pingResult);
  console.log("Connected successfully to server");

  const app = express();

  app.get("/health", (_req, res) => {
    res.send("OK");
  });

  app.get("/ping", async (_req, res) => {
    const pingResult = await client.db("myDB").command({ ping: 1 });
    res.send(pingResult);
  });

  app.get("/find", async (_req, res) => {
    const found: unknown[] = [];

    const cursor = client.db("myDB").collection("myCollection").find();
    await cursor.forEach((document: unknown) => found.push(document));
    res.send(found);
  });

  return app;
}
