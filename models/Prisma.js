
// Lado = l
// Altura = h

class Prisma{
    constructor(l, h){
        this.l = l
        this.h = h
    }

    // Cálculo da área da base do prisma triangular
    calcularAreaBasePrismaTri(){
        return ((this.l * this.l) * (Math.sqrt(3)) / 4)
    }
    
    // Cálculo do volume do prisma triangular
    calcularVolumePrismaTri(){
        return this.calcularAreaBasePrismaTri() * this.h
    }
}

module.exports = Prisma