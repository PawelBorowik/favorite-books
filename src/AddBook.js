import React, {useState} from 'react';
import {useDispatch} from "react-redux"
import {ADD_BOOK} from "./store/reducer"


import './App.css';


function AddBook() {

    const dispatch= useDispatch()

    
    const [author, setAuthor]= useState("")
    const [title, setTitle]= useState("")
    const [literaryGenre, setLliteraryGenre]= useState("")
    const [cover, setCover]= useState("")
    const[coverName, setCoverName]=useState("")

    const literaryGenreList= ["kryminał", "historyczny", "fantazy", "przygodowy", "inny"]

    const optionGenre= literaryGenreList.map( item=> <option key={item}>{item}</option>)

    const handleAddAuthor=e=>{
    
    setAuthor(e.target.value)
    }
    const handleAddTitle=e=>{
  
    setTitle(e.target.value)
}
const handleSelectLiteraryGenre=e=>{
   
    setLliteraryGenre(e.target.value)
}
const handleAddBookCover=e=>{
  
    setCover( URL.createObjectURL(e.target.files[0]))
    setCoverName( e.target.files[0])
}
const handleAddBook=(e)=>{
    e.preventDefault()
    e.stopPropagation()
    const addedBook={
        author,
        title,
        literaryGenre,
        cover,
    }
    //  const newBooksList=[ ...books, addedBook]
    //  setBooks(newBooksList) przed dodaniem reduxa
    dispatch({type: ADD_BOOK, payload: addedBook})
     setAuthor("")
     setLliteraryGenre("")
     setTitle("")
     setCover("")
     setCoverName("")
}


// useEffect(()=>{
//     console.log("effect sie odpala")
// },[title])


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
            
            
            <input type="file" id="files" onChange={handleAddBookCover}/>
  <label className="Cover" htmlFor="files">{coverName ? <span className="name-file">{coverName.name}</span>: <span>wybierz okładkę</span>}</label>
           
            <br/>
            <button onClick={handleAddBook}>Dodaj</button>
        </form>
     
      
    </div>
  );
}

export default AddBook;