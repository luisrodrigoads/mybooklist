import { TableList } from "../styles/styles";
import ItemBookList from "./ItemBookList";

const lista = [1,4,5,6,7,8]

export default function BookList({books, addFavoriteBookToApi}){

 
    return(
        <TableList>
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
                       lista.map((i)=>{
                           return (
                            <>   
                            <ItemBookList item={i} addFavoriteBookToApi={addFavoriteBookToApi} />
                            </>
                           );
                       })
                    }
                    
                </tbody>
            </table>
        </TableList>
    )
}