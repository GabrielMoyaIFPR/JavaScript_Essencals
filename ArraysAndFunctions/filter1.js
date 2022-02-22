const produtos = [
    {nome: "Notebook", preco: 2499, fragil: true  },
    {nome: "Ipad Pro", preco: 4199, fragil: true  },
    {nome: "Copo de Vidro", preco: 12.9, fragil: true  },
    {nome: "Copo de Plástico", preco: 18.99, fragil: false  },
    
]

caro = produto => produto.preco >= 500
fragil = produto => produto.fragil


console.log(produtos.filter(caro).filter(fragil))