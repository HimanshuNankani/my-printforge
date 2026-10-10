import sqlite3 from "sqlite3";
import path from "node:path";
import { open } from "sqlite";

export async function getDBCnnection() {
  const dbPath = path.join(process.cwd(), "printforge.db");

  return open({ filename: dbPath, driver: sqlite3.Database });
}
