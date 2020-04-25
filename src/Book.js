import React from 'react';




function Book({books}) {

    
return books.map( book=><> <p>autor {book.author}</p><p>tytuł {book.title}</p></> )
  


}

export default Book;
