
import conexao from "../../db.js";

// Lista todos os jogadores
export function listar(callback) {
    const sql = "SELECT * FROM jogadores ORDER BY id";
    conexao.query(sql, callback);
};

// Busca jogador pelo ID
export function buscarPorId(id, callback) {
    const sql = "SELECT * FROM jogadores WHERE id = ?";
    conexao.query(sql, [id], callback);
};

// Cria um novo jogador
export function criar(dados, callback) {
    const sql = "INSERT INTO jogadores (nome, email, nickname) VALUES (?, ?, ?)";
    conexao.query(sql, [dados.nome, dados.email, dados.nickname], callback);
};

// Atualiza jogador
export function atualizar(id, dados, callback) {
    const sql = "UPDATE jogadores SET nome = ?, email = ?, nickname = ? WHERE id = ?";
    conexao.query(sql, [dados.nome, dados.email, dados.nickname, id], callback);
};

// Deleta jogador
export function deletar(id, callback) {
    const sql = "DELETE FROM jogadores WHERE id = ?";
    conexao.query(sql, [id], callback);
};
