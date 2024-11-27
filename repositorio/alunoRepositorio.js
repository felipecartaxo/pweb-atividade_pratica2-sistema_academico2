class AlunoRepositorio {
    constructor() {
        this.alunos = [];
    }

    // Cadastra um aluno na lista de alunos do repositório
    inserir(aluno) {
        this.alunos.push(aluno);
    }

    // Remove um aluno da lista a partir de uma matrícula
    remover(matricula) {

        // Retorna o índice do aluno cuja matrícula "bate" com a matrícula passada como argumento do método
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);

        if (indxAlunoARemover > -1) {
            // Remove o aluno no índice em questão até o índice 1
            this.alunos.splice(indxAlunoARemover, 1);
        }
    }

    // Retorna a lista de alunos cadastrados
    listar() {
        return this.alunos;
    }
}