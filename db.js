const path = require("path");
const sqlite3 = require("sqlite3").verbose();

// Caminho do arquivo .db dentro da pasta "data"
const dbPath = path.resolve(__dirname, "data", "clientes.db");

// Cria pasta "data" caso não exista
const fs = require("fs");
if (!fs.existsSync(path.dirname(dbPath))) {
  fs.mkdirSync(path.dirname(dbPath));
}

// Conecta ao banco de dados (arquivo)
const db = new sqlite3.Database(dbPath);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS clientes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      email TEXT NOT NULL
    )
  `);
});

module.exports = db;
