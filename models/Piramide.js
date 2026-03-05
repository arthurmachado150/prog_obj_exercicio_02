
// Lado = l
// Altura = h

class Piramide{
    constructor(l, h){
        this.l = l
        this.h = h
    }

    // Cálculo da área da base do pirâmide triangular
    calcularAreaBasePiramideTri(){
        return ((this.l * this.l) * (Math.sqrt(3)) / 4)
    }
    
    // Cálculo do volume do pirâmide triangular
    calcularVolumePiramideTri(){
        return (1 / 3) * this.calcularAreaBasePiramideTri() * this.h
    }
}

module.exports = Piramide