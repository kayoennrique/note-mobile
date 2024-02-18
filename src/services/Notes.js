import { db } from './SQLite';

export function tableCreate() {
  db.transaction((transaction) => {
    transaction.executeSql("CREATE TABLE IF NOT EXIST " +
      "Notas " +
      "(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, categorie TEXT, text TEXT);")
  });
}