
// Comando de instalação da biblioteca
// npm install --save readline-sync

const rl = require('readline-sync')
const Prisma = require('./models/Prisma')
const Piramide = require('./models/Piramide')

let op = 0

do{
    console.log('|---------------------------------------------------------------|')
    console.log('|--- 1 = Prisma Triangular -------------------------------------|')
    console.log('|--- 2 = Pirâmide Triangular -----------------------------------|')
    console.log('|---------------------------------------------------------------|')

    op = Number(rl.question(`Qual a sua opcao: `))
    console.log(op)

    if(op === 1){
        let l = Number(rl.question(`Qual o valor do lado: `))
        let h = Number(rl.question(`Qual o valor da altura: `))
        let prisma = new Prisma(l, h)
        let areaBasePrisma = prisma.calcularAreaBasePrismaTri()
        let volumePrisma = prisma.calcularVolumePrismaTri()

        console.log(`A Área da Base do prisma triangular de Lado ${l} é: ${areaBasePrisma.toFixed(3)}`)
        console.log(`O Volume do prisma triangular de Área da Base ${areaBasePrisma.toFixed(3)} e Altura ${h} é: ${volumePrisma.toFixed(3)}`)
    }else if(op === 2){
        let l = Number(rl.question(`Qual o valor do lado: `))
        let h = Number(rl.question(`Qual o valor da altura: `))
        let piramide = new Piramide(l, h)
        let areaBasePiramide = piramide.calcularAreaBasePiramideTri()
        let volumePiramide = piramide.calcularVolumePiramideTri()

        console.log(`A Área da Base do prisma triangular de Lado ${l} é: ${areaBasePiramide.toFixed(3)}`)
        console.log(`O Volume do prisma triangular de Área da Base ${areaBasePiramide.toFixed(3)} e Altura ${h} é: ${volumePiramide.toFixed(3)}`)
    }else{
        console.log(` Opção Inválida! Dijite novamente! `)
    }

}while(op !== 0)

console.log('fim do programa')