class AlunoService {
    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    // Insere, no repositório, um novo aluno
    inserir(nome, idade, matricula) {

        // Requisito #1: Não permitir inserir aluno menor de idade
        if (idade < 18) {
            alert("Idade menor do que 18 anos.");
            throw new Error("Idade menor do que 18 anos.");
        }
        
        // Pesquisa se o aluno que está sendo cadastrado já existe
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);

        // Caso já exista, ou seja, alunoPesquisado > 0 (pois significa que o método pesquisarPorMatricula retornou algo), uma exceção será lançada
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }

        // Caso contrário, o aluno novo será instanciado
        const alunoNovo = new Aluno(nome, idade, matricula);
        // E inserido no repositório
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    // Retorna o aluno cuja matrícula por igual a que foi passada como argumento
    pesquisarPorMatricula(matricula) {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    // Remove um aluno a partir de uma matrícula
    remover(matricula) {
        this.repositorio.remover(matricula);
    }

    // Lista os alunos com idade inferior a 18
    listarMenoresIdade() {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}