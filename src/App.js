import React, {useState} from 'react';
import AddBook from "./AddBook";
import Book from "./Book"

import './App.css';


function App() {

  
const [books, setBooks]= useState([{author:"a", title: "b"}, {author:"d", title: "b"}])

// setBooks("a")

// let books= ["a", "b"]
// books.map( book=> <p>{book}</p>)


  return (
    <div className="App">
      <header className="App-header">
      <h1>Ulubione Ksiązki</h1>
      <AddBook/>
      <Book books={books}/>
  
      </header>


    </div>
  );
}

export default App;
