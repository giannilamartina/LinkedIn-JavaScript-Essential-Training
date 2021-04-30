function Book (
    title,
    author,
    genre,
    dateReleased,
    publisher,
    tornPages,
    usedOrNew,
    
) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.dateReleased = dateReleased;
    this.publisher = publisher;
    this.tornPages = tornPages;
    this.usedOrNew = usedOrNew;
    this.verifyUsage = function (usageStatus) {
        this.usedOrNew = usageStatus;
    };
}

const eragon = new Book (
    "Eragon",
    "Christopher Paolini",
    "Fantasy",
    "2002",
    "Paolini LLC",
    0,
    "Used",
);

const harryPotter = new Book (
    "Harry Potter and the Sorcerer's Stone",
    "J.K. Rowling",
    "Fantasy",
    "2001",
    "Bloomsbury",
    0,
    "Used",
);