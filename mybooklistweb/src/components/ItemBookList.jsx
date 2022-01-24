import {ButtonsList} from '../styles/styles';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function ItemBookList({item, addFavoriteBookToApi}){

    const [showModal, setShowModal] =  useState(false);

    return(
        <>
        <tr>
        <td><img alt="" src={`http://books.google.com/books/content?id=is06DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api`} /></td>
        <td>{`nome do livro ${item}`}</td>
        <td>
            <ButtonsList>
                <button onClick={()=>setShowModal(true)} style={{ backgroundColor: "#2C394B"}}>
                    Detalhes
                </button>
            </ButtonsList>
        </td>
        </tr>
        {   
            showModal ?
                <Modal title={`nome do livro ${item}`} setShowModal={setShowModal} addFavoriteBookToApi={addFavoriteBookToApi} />
            : null
        }
        </>
    );
}