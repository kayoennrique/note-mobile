import { db } from './SQLite';

export function tableCreate() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXIST " +
      "Notes " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, categorie TEXT, text TEXT);");
  });
}

export async function addNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("INSERT INTO Notes (title, categorie, text) VALUES (?, ?, ?);", [note.title, note.categorie, note.text], () => {
        resolve("Nota adicionada com sucesso")
      });
    });
  });
}

export async function searchNote(note) {
  return new Promise((resolve) => {
    db.transaction((transaction) => {
      transaction.executeSql("SELECT * FROM Notes;", [], (transaction, result) => {
        resolve(result.rows._array)
      });
    });
  });
}