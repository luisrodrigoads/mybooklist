import {ButtonsList} from '../styles/styles';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function ItemBookList({isFavorite, item, addFavoriteBookToApi, deleteFavoriteBook}){

    const [showModal, setShowModal] =  useState(false);

    return(
        <>
        <tr>
        <td>{
          isFavorite ? 
          <img style={{width: '250px',height: '250px'}} alt="" src={item.imgBook} />
          :
          <img alt="" src={isFavorite ? item.imgBook : item.volumeInfo.imageLinks.smallThumbnail} />  
        }</td>
        <td>{isFavorite ? item.title : item.volumeInfo.title}</td>
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
                <Modal isFavorite={isFavorite} item={item} setShowModal={setShowModal} addFavoriteBookToApi={addFavoriteBookToApi} deleteFavoriteBook={deleteFavoriteBook}/>
            : null
        }
        </>
    );
}