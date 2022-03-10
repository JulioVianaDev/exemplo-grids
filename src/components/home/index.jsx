import './home.css';
import styled from 'styled-components';
import home from '../imagens/gridhome.jpg';

const Home = ()=>{
    return(
        <>
            <Imagem src={home}/>
        </>
    );
}

export default Home;

const Imagem = styled.img`
    width:100vw;
    height:90vh;
`;