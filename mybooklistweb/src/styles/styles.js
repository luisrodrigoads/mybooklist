import styled, { createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export const HeaderPage = styled.header`
    background-color: #2C394B;
    color: #eee;
    display: flex;
    justify-content: center;
    padding: 1.2rem;
`;

export const InputContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 0.6rem;
    
    
    input{
        background-color: #eee;
        color: #2C394B;
        border: none;
        font-size: 1.2rem;
        padding: 0.4rem;
        width: 36%;
        border-radius: 0.2rem;
    }

    button{
        background-color: #2b2b2b;
        color: #eee;
        padding: 0.4rem;
        border: none;
        border-radius: 0.2rem;
        font-size: 1rem;
        font-weight: bold;
        margin-left: 0.4rem;
    }

    button:hover{
        filter: opacity(80%);
        transition: 0.2s linear;
        cursor: pointer;
    }
`;

export const TableList = styled.main`
    display: flex;
    justify-content: center;
    width: 100vw;
    margin-top: 1.8rem;
    border-top: 1px solid #2C394B;

    table{
        width: 70%;
        border: 1px solid #999999;
        border-collapse: collapse;
        margin-top: 1.8rem;
    }

    table th, table td {
        font-size: 1rem;
        padding: 0.4rem;
        text-align: left;
        border: 2px solid #999999;
        vertical-align: top;
    }

    table th:first-child, table td:first-child {
        width: 22%;
    }

    table th:last-child, table td:last-child {
        width: 18%;
    }
`;

export const ButtonsList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    button {
        font-size: 1.2rem;
        padding: 0.2rem 0.4rem 0.02rem;
        border: none;
        color: #eee;
        margin-bottom: 0.4rem;
        border-radius: 0.4rem;
    }
`;

export const FavoritesTitleContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 1.8rem;
    width: 100%;
    padding-bottom: 0.6rem;

    p{
        font-size: 1.8rem;
        font-weight: bold;
        color: #2C394B;
    }

`;

export const ModalContainer = styled.div`
    z-index: 9999;
    position: fixed;
    background-color: #eee;
    top: 30%;
    left: 20%;
    width: 60%;
    border-radius: 0.4rem;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    button{
        color: #eee;
        background-color: red;
        padding: 0.2rem;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 0.4rem;
    }

    button:hover{
        filter: opacity(60%);
        cursor: pointer;
    }

    img{
        margin: 0.5rem;
    }

    h2{
        padding-left: 0.4rem;
        margin-top: 0.4rem;
    }

    h3{
        margin-bottom: 0.4rem;
        padding-left: 0.4rem;
    }

    p{
        padding-left: 0.4rem;
        padding-right: 0.4rem;
        margin-bottom: 0.4rem;
    }

`;