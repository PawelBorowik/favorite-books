import React from 'react';


function Book({books}) {

 const listBooks= books.map( book=>{
    return(
    <div key={book.title}>
      <p>autor {book.author}</p>
      <p>tytuł {book.title}</p>
      <p>gatunek {book.literaryGenre}</p>
      <img src= {book.cover} alt={book.title}/>
      

    </div>
    )})

    return (
    <div>
      {books.length===0 ? <p>"twoja lista jest pusta"</p>: listBooks}
    </div>
    )

  


}

export default Book;
