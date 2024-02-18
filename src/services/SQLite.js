import * as SQLite from "expo-sqlite";

function conectionOpened() {
  const database = SQLite.openDatabase("db.db");
  return database;
}

export const db = conectionOpened();