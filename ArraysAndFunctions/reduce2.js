const alunos = [
    {nome: "João", nota: 7.3, bolsista: true  },
    {nome: "Maria", nota: 9.2, bolsista: false  },
    {nome: "Tiago", nota: 9.8, bolsista: true  },
    {nome: "Marcelo", nota: 8.9, bolsista: false  },
    
]

// Desafio 1: Todos os alunos são bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// Desafio 2: Algum aluno é bolsista?
const algumBolsista =(resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))