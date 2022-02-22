const alunos = [
    {nome: "João", nota: 7.3, bolsista: true  },
    {nome: "Maria", nota: 9.2, bolsista: false  },
    {nome: "Tiago", nota: 9.8, bolsista: true  },
    {nome: "Marcelo", nota: 8.9, bolsista: false  },
    
]

console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)