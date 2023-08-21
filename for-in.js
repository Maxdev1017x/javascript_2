// Ele [e um For de combinações e instruções que intera a propriedade de uma objeto
// É um bloco de código loop, que é executado uma vez a cada propriedade
//Bem parecido com o for of

const person = {
name: "Max",
lastName: "Oliveira",
age: "30"
}

for (let people in person) {
    console.log(person[people])
}

