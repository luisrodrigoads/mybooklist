import { ModalContainer } from "../styles/styles";

export default function Modal({title,setShowModal,addFavoriteBookToApi}){
    
    const handleAddFavoriteBook = () =>{
        addFavoriteBookToApi(title);
        setShowModal(false);
    }

   return(
    <ModalContainer>
        <div>
            <button style={{backgroundColor: "green"}} onClick={()=>handleAddFavoriteBook()}>
                Adicionar
            </button>

            <button onClick={()=>setShowModal(false)}>
                Fechar
            </button>
        </div>
        <p>{title}</p>
        <p>{title}</p>
        <p>{title}</p>
       
    </ModalContainer>
   );
}