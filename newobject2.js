//Practice 1 - Build a new object

const sneaker = {
    name: "Air Jordan 1s",
    size: 11,
    color: "Banned Red",
    shoeAccents: {
        laceColor: "Black",
        material: "Leather",
    },

    lacesTied: false,
    tieLaces: function (laceStatus) {
        this.lacesTied = laceStatus;
    },
    
};

