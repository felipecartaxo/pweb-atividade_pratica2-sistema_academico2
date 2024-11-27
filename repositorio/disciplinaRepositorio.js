class DisciplinaRepositorio {
    constructor() {
        // Array vazio que será utilizado para armazenar os objetos do tipo Disciplina
        this.disciplinas = [];
    }

        // Cadastra uma disciplina na lista de disciplinas do repositório
        inserir(disciplina) {
            this.disciplinas.push(disciplina);
        }

        // Remove uma disciplina da lista a partir de um código
        remover(codigo) {
            const disciplinaASerRemovida = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);

            // Remove a disciplina no índice em questão até o índice 1
            if (disciplinaASerRemovida > 0) {
                this.disciplinas.splice    
            }
        }

        // Retorna a lista de disciplinas
        listar() {
            return this.disciplinas;
        }
    }