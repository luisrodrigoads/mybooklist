import { InputContainer } from "../styles/styles";

export default function InputSearch({inputText,setInputText,searchBook}){
    return(
        <InputContainer>
            <input value={inputText} onChange={(event) => setInputText(event.target.value)} placeholder="titulo do livro" type="text" />
            <button
                type="submit"
                onClick={() => inputText ? searchBook(inputText) : alert('Preencha o campo')}
            >
                Pesquisar
            </button>
        </InputContainer>
    );
}