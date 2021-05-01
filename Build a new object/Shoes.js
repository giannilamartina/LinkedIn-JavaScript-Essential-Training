class Shoes {
    constructor(
        //Defines parameters
        name,
        color,
        size,
        brand,
        laceLengthL,
        laceLengthR,
        lacesTied,
    ) {
        //Define properties
        this.name = name;
        this.color = color;
        this.size = size;
        this.brand = brand;
        this.laceLengthL = laceLengthL;
        this.laceLengthR = laceLengthR;
        this.lacesTied = lacesTied;
    }

        //Add methods like normal functions:
        tieLaces(laceStatus) {
            this.lacesTied = lacesTied;
        }

        newLaceLength (laceLengthL, laceLengthR) {
            this.laceLengthL = laceLengthL;
            this.laceLengthR = laceLengthR;
        }

}

export default Shoes;