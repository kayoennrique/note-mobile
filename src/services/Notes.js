import { db } from "./SQLite";

export function tableCreate() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXISTS " +
      "Notes " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, categorie TEXT, text TEXT);");
  });
}

export async function addNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notes (title, categorie, text) VALUES (?, ?, ?);", [note.title, note.categorie, note.text], () => {
        resolve("Nota adicionada com sucesso!")
      });
    });
  });
}

export async function updateNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("UPDATE Notes SET title = ?, categorie = ?, text = ? WHERE id = ?;", [note.title, note.categorie, note.text, note.id], () => {
        resolve("Note atualizada com sucesso!")
      });
    });
  });
}

export async function removeNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("DELETE FROM Notes WHERE id = ?;", [note.id], () => {
        resolve("Nota removida com sucesso!")
      });
    });
  });
}

export async function searchNotes() {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notes;", [], (transaction, result) => {
        resolve(result.rows._array)
      });
    });
  });
}