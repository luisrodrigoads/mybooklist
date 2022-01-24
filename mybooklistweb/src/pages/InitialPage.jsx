import axios from 'axios';
import { useEffect, useState } from 'react';
import BookList from '../components/BookList';
import FavoriteBooksList from '../components/FavoriteBooksList';
import Header from '../components/Header';
import InputSearch from '../components/InputSearch';
import { FavoritesTitleContainer } from '../styles/styles';

export default function InitialPage(){

    const [books, setBooks] = useState([]);
    const [favoriteBooks, setFavoriteBooks] = useState([]);
    const [inputText, setInputText] = useState('');

    useEffect(() => {
        getFavoriteBooksFromApi();
    },[])

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

    const addFavoriteBookToApi = (id, title, description, imgBook, authors) => {
        let newBook = {
            idBook: id,
            title: title,
            description: description,
            imgBook: imgBook,
            authors: authors
        }

        axios.post(`http://127.0.0.1:3333/books`, newBook)
            .then(response => {
                if(response.status === 200){
                    alert('Livro adicionado aos favoritos');
                    getFavoriteBooksFromApi();
                }else {
                    alert('Ocorreu um erro ao adicionar livro aos favoritos');
                }

            })
        
    }

    const getFavoriteBooksFromApi = () => {
        axios.get(`http://127.0.0.1:3333/books`)
            .then(response => {
                setFavoriteBooks(response.data);
            }).catch(error => {
                console.log(error);
                alert('Ocorreu um erro ao buscar livros favoritos');
            })

    }

    const deleteFavoriteBook = (id) => {
        axios.delete(`http://127.0.0.1:3333/books/${id}`)
            .then(response => {
                alert('Livro removido dos favoritos');
                getFavoriteBooksFromApi();
            }).catch(error => {
                alert('Ocorreu um erro ao remover livro dos favoritos');
            })
        
    }

    return(
        <>
            <Header />
            <InputSearch inputText={inputText} setInputText={setInputText} searchBook={searchBook} />
            {   books ?
                <BookList isFavorite={false} books={books} addFavoriteBookToApi={addFavoriteBookToApi} />
                : null
            }
            <FavoritesTitleContainer>
                <p>Favoritos</p>
            </FavoritesTitleContainer>
            {   favoriteBooks.length > 0 ?
                <FavoriteBooksList favoriteBooks={favoriteBooks} deleteFavoriteBook={deleteFavoriteBook} />
                : <p style={{fontSize: '1.2rem',textAlign: 'center'}}>Não há livros favoritos cadastrados</p>
            }
        </>
    );
}