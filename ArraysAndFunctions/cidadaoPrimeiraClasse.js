//Funcao em JS E First-Class Object (CItizens)


//criar de forma literal
function fun() {}

// Armazenar em uma variavel
const fun2 = function() {}

//Armazenar em um array

const array = [function(a, b){ return a + b }, fun1, fun2]
console.log(array[0](2,3))


//Armazenar em um atributo objeto
const obj = {}
obj.falar = function() {return 'Opa'}
console.log(obj.falar())

//Passar funçao como param
function run(fun) {
    fun()
}

run(function() { console.log('Executando...')})

//Uma funçao pode retornar/contar uma funçao

function soma(a,b) {
    return function(c) {
        console.log(a+b+c)
    }
}

soma(2,3)(4)
