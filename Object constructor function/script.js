//Create an object constructor for the Shoes object type.

function Shoes (
    model, //"name" variable is deprected (?)
    size,
    color,
    defectsNumber,
    laceLengthL,
    laceLenthR,
    lacesTied,
    ) {
        this.model = model;
        this.size = size;
        this.color = color;
        this.defectsNumber = this.defectsNumber;
        this.laceLength = {
            left = laceLengthL,
            right = laceLengthR,
        };
        this.lacesTied = lacesTied;
        this.toggleLaces = function (lacesStatus) {
            this.lacesTied = lacesStatus;
        };
        this.newLaceLength = function (lengthLeft, lengthRight) {
            this.laceLength.left = lengthLeft;
            this.laceLength.right = lengthRight;
        };
    }

    const aj1 = new Shoes (
        "Air Jordan 1 Banned Red",
        10.5,
        "Black and Red",
        0,
        72,
        72,
        false,
    );