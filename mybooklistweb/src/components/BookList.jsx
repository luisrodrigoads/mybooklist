import { TableList } from "../styles/styles";
import ItemBookList from "./ItemBookList";

export default function BookList({isFavorite ,books, addFavoriteBookToApi, deleteFavoriteBook}){

 
    return(
        <TableList>
            {
            books.length > 0 &&
            <table>
                <thead>
                    <tr>
                        <th>Capa</th>
                        <th>Titulo</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {
                       books.map((i, index)=>{
                           return (
                            <>   
                            <ItemBookList key={index} isFavorite={isFavorite} item={i} addFavoriteBookToApi={addFavoriteBookToApi} deleteFavoriteBook={deleteFavoriteBook}/>
                            </>
                           );
                       })
                    }
                    
                </tbody>
            </table>
            }
        </TableList>
    )
}