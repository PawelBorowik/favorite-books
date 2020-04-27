import React, {useState} from 'react';
import AddBook from "./AddBook";
import Book from "./Book"

import './App.css';


function App() {

  
// const [books, setBooks]= useState([{author:"Andrzej Sapkowski", title: "Ostatnie życzenie"}, {author:"Janusz Meissner", title: "Pilot gwiaździestego znaku"}])
const [books, setBooks]= useState([])




  return (
    <div className="App">
      <header className="App-header">
      <h1>Ulubione Ksiązki</h1>
      <AddBook books={books} setBooks={setBooks}/>
      <Book books={books}/>
  
      </header>


    </div>
  );
}

export default App;
