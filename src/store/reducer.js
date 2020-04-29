const initialState ={
    books:[]
}

(state = initialState, action) =>{
    switch(action.type){
        case"ADD_BOOK":{
            const newBooks = [...state.books, action.payload]
        }
    }
}