class DisciplinaService {
    constructor() {
        this.repositorio = new DisciplinaRepositorio();
    }

    inserir(codigo, nome) {
        const disciplinaPesquisada = this.pesquisarPorCodigo(codigo);
        
        // Verifica se a disciplina já está cadastrada
        if (disciplinaPesquisada > 0) {
            throw new Error("Disciplina já cadastrada!");
        }

        // Caso contrário, a disciplina nova será instanciada
        const disciplinaNova = new Disciplina(codigo, nome);
        
        // Insere a nova disciplina no repositório
        this.repositorio.inserir(disciplinaNova);

        return disciplinaNova;
    }

    pesquisarPorCodigo(codigo) {
        return this.repositorio.listar().filter(
            disciplina => disciplina.codigo === codigo);
    }

    // Remove uma disciplina a partir de um código
    remover(codigo) {
        this.repositorio.remover(codigo);
    }
}