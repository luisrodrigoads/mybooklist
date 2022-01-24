import { ModalContainer } from "../styles/styles";

export default function Modal({ isFavorite, item,setShowModal,addFavoriteBookToApi, deleteFavoriteBook}){
    
    const handleAddFavoriteBook = () =>{
        addFavoriteBookToApi(
            item.id,
            item.volumeInfo.title,
            item.volumeInfo.description,
            item.volumeInfo.imageLinks.smallThumbnail,
            item.volumeInfo.authors
        );
        setShowModal(false);
    }

    const handleDeleteFavoriteBook = () => {
        deleteFavoriteBook(item.id);
        setShowModal(false);
    }

   return(
    <ModalContainer>
        <div>
            {
                isFavorite ?
                <button onClick={()=>handleDeleteFavoriteBook()} >
                    Excluir
                </button>
                :
                <button style={{backgroundColor: "green"}} onClick={()=>handleAddFavoriteBook()}>
                    Adicionar
                </button>
            }
            

            <button onClick={()=>setShowModal(false)}>
                Fechar
            </button>
        </div>
        <h2>Detalhes do livro:</h2>
        <img alt="" src={isFavorite ? item.imgBook : item.volumeInfo.imageLinks.smallThumbnail} />
        <h3>{isFavorite ? item.title : item.volumeInfo.title}</h3>
        <p><b>Descrição: </b>{isFavorite ? item.description : item.volumeInfo.description}</p>
        <p><b>Autores: </b>{isFavorite ? item.authors : item.volumeInfo.authors}</p>
        {
            isFavorite ? 
            <p><b>Adicionado em: </b>{item.created_at}</p>
            :null
        }
    </ModalContainer>
   );
}