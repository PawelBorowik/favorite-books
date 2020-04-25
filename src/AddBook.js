import React, {useState, useEffect} from 'react';


import './App.css';


function AddBook() {

    
const [author, setAuthor]= useState("")
const [title, setTitle]= useState("")
const [literaryGenre, setLliteraryGenre]= useState("")
const [cover, setCover]= useState("")

const literaryGenreList= ["kryminał", "historyczny", "fantazy", "przygodowy", "inny"]

const optionGenre= literaryGenreList.map( item=> <option key={item}>{item}</option>)

const handleAddAuthor=e=>{
    e.preventDefault()
    setAuthor(e.target.value)
}
const handleAddTitle=e=>{
    e.preventDefault()
    setTitle(e.target.value)
}
const handleSelectLiteraryGenre=e=>{
    e.preventDefault()
    setLliteraryGenre(e.target.value)
}
const handleAddBookCover=e=>{
  
    setCover( URL.createObjectURL(e.target.files[0]))
}
useEffect(()=>{
    console.log("effect sie odpala")
},[title])


  return (
    <div>
        <form action="">
            <label htmlFor="author">
                Autor
            <input 
                    id ="author"
                    type="text" 
                    value={author} 
                    placeholder="autor" 
                    onChange={handleAddAuthor}
                    onBlur={handleAddAuthor}/>
            </label>
          <br />
          <label htmlFor="title">
                Tytuł
            <input 
                    id ="title"
                    type="text" 
                    value={title} 
                    placeholder="tytuł" 
                    onChange={handleAddTitle}
                    onBlur={handleAddTitle}/>
            </label>
          <br />
            <label htmlFor="literaryGenre">
                Gatunek
                <select  
                    id="literaryGenre"
                    value={literaryGenre}
                    onChange={handleSelectLiteraryGenre}>
                    Gatunek Literacki
                    <option value="">wybierz</option>
                    {optionGenre}
                </select>      
            </label>
            <br />
            <input type="file" onChange={handleAddBookCover}/>
           
            <br/>
            <button>Dodaj</button>
        </form>
     
      <img src={cover} alt=""/>
    </div>
  );
}

export default AddBook;