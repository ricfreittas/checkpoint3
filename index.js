let curso = require("./Modulos/app");

function Aluno (nome,quantFaltas,notas){
    this.nome = nome
    this.quantFaltas = quantFaltas
    this.notas = notas

    this.calcularMedia = function() {
        let media = 0;
        for(let i = 0;i<this.notas.length;i++){
            media += this.notas[i];
        }
        return media / this.notas.length;
    }

    this.faltas = function() {
        this.quantFaltas += 1;
    }
    
}


    const aluno1 = new Aluno ('Ricardo', 2, [6,6,8,9]);
    const aluno2 = new Aluno ('Pedro', 5, [7,5,10,8]);
    const aluno3 = new Aluno ('João', 1, [6,2,8,7]);
    const aluno4 = new Aluno ('Maria', 0, [4,9,8,8]);

  console.log(aluno4.calcularMedia());
  console.log(aluno2.quantFaltas);
  console.log(aluno3.nome);
  console.log(aluno2.notas);

/*let curso = {
    nomedoCurso:'Digital House',
    notadeAprovacao: 7,
    faltasmaximas: 5,
    listadeEstudantes:[],

    addAluno: function(novoaluno) {
        this.listadeEstudantes.push(novoaluno);
    },

    aProvacao: function (aluno) {

        let media = aluno.calcularMedia();
        let resultado;

        if ( media >= this.notadeAprovacao && aluno.quantFaltas < this.faltasmaximas){
            resultado = true;
        } else if (media > (this.notadeAprovacao * 1.1) && aluno.quantFaltas === this.faltasmaximas ) {
            resultado = true;
        } else {
            resultado = false;
        }
        return resultado;
    },

    resultFinal: function() {
        let verdade = [];
        for(let i=0; i<this.listaEstudantes.length;i++){
            verdade.push(this.aProvacao(this.listaEstudantes[i]));
        }

        return verdade;
    }
        
}

*/
