const library = [];


const book1 = new Book('book1','mo',99,false);
const book2 = new Book('book2','mo',99,true);
const book3 = new Book('book3','mo',99,false);
const book4 = new Book('book4','mo',99,true);
const book5 = new Book('book5','mo',99,false);
const book6 = new Book('book6','mo',99,true);


library.push(book1,book2,book3,book4,book5,book6);


function Book(title,author,pages,readStatus){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.readStatus=readStatus;
}


function addBookToLibrary(){

}

const displayCards = ()=>{
    for(let i=0;i<library.length;i++){
    }
}