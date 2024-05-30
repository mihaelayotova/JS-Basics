function oldBooks (input) {
    let index = 0;
    let favBook = input[index];
    index++;

    let books = input[index];
    let booksSum = 0;

    while (books !== favBook) {
        
        if (books === "No More Books") {
            console.log(`The book you search is not here! \nYou checked ${booksSum} books.`);
            break;
        } 
        
        booksSum++;
        index++;
        books = input[index];
    }
    
        if (books !== "No More Books") {
            console.log(`You checked ${booksSum} books and found it.`);
            }
}

oldBooks (["Troy","Stronger","Life Style","Troy"]);
oldBooks (["The Spot","Hunger Games","Harry Potter","Torronto","Spotify","No More Books"]);
oldBooks (["Bourne","True Story","Forever","More Space","The Girl","Spaceship","Strongest","Profit","Tripple","Stella","The Matrix","Bourne"]);