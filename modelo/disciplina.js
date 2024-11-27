// Requisito #2: Desenvolver a classe Disciplina, contendo como atributos: código, nome e um array de alunos (da classe Aluno) e seus respectivos métodos get e set
class Disciplina {

    constructor (codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;

        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(alunos) {
        this.alunos = alunos;
    }
}