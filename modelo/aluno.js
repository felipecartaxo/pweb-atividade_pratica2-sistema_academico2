class Aluno {

    constructor(nome, idade, matricula) {
        this._nome = nome;
        this.idade = idade;
        this.matricula = matricula;
    }

    // Retorna o nome do aluno
    get nome() {
        return this._nome;
    }

    // Altera o nome do aluno
    set nome(novoNome) {
        this._nome = novoNome;
    }
}