import BookList from "./BookList";

export default function FavoriteBooksList({favoriteBooks, deleteFavoriteBook}){
    return(
        <BookList isFavorite={true} books={favoriteBooks} deleteFavoriteBook={deleteFavoriteBook} />
    );
}