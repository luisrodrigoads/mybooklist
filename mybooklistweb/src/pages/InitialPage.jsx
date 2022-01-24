import axios from 'axios';
import { useState } from 'react';
import BookList from '../components/BookList';
import FavoriteBooksList from '../components/FavoriteBooksList';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import { FavoritesTitleContainer } from '../styles/styles';

export default function InitialPage(){

    const [books, setBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [inputText, setInputText] = useState('');

    const searchBook = (titleSearch) => {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${titleSearch}`)
            .then(res => res.data)
            .then(result => {
                setBooks(result.items);

                setInputText('');
            }).catch(() => {

                setBooks([]);
                setInputText('')

                alert('Livro não encontrado');
            })
    }

    const addFavoriteBookToApi = (id, title, imgBook, authors, isbn) => {

        //get favoritebooks
    }

    const getFavoriteBooksFromApi = () => {

    }

    const deleteFavoriteBook = (id) => {
        //get favoritebooks
    }

    return(
        <>
            <Header />
            <InputSearch inputText={inputText} setInputText={setInputText} searchBook={searchBook} />
            {   books ?
                <BookList books={books} addFavoriteBookToApi={addFavoriteBookToApi} />
                : null
            }
            <FavoritesTitleContainer>
                <p>Favoritos</p>
            </FavoritesTitleContainer>
            {   favoriteBooks.length > 0 ?
                <FavoriteBooksList />
                : <p>Não há livros favoritos cadastrados</p>
            }
        </>
    );
}