class Polygon{
    constructor(sidesArray){
        this.sidesArray = sidesArray
    }

    get countSides(){
        return this.sidesArray.length
    }

    get perimeter(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue
        return this.sidesArray.reduce(reducer)
    }
    
}

class Triangle extends Polygon{

    get isValid(){
        if(!Array.isArray(this.sidesArray)) return;
        if (this.countSides !== 3) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        return ((side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1))
    }

}

class Square extends Polygon{
    get isValid(){
        if (!Array.isArray(this.sidesArray)) return;
        if (this.countSides !== 4) return;
        let side1 = this.sidesArray[0]
        let side2 = this.sidesArray[1]
        let side3 = this.sidesArray[2]
        let side4 = this.sidesArray[3]
        return ((side1 === side2) && (side1 === side3) && (side1 === side4))
    }

    get area(){
        if (!Array.isArray(this.sidesArray)) return;
        if (this.countSides !== 4) return;
        return (this.sidesArray[0] * this.sidesArray[0])
    }
}