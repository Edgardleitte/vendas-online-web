import styled from "styled-components";

export const BackgroundImage  = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: -1;
`;

export const ContainerLoginScreen = styled.div`
    width: 100%;
    justify-content: right;
    max-width: 646px;
    display: flex;
`;

export const LogoImage  = styled.img``;


export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    width: 100%;
    height: 100vh;
    max-width: 646px;
`;


export const LimitedContainer = styled.div`
    width: 100%; // Ocupa 100% da largura do container pai
    max-width: 498px; // Máximo de 498px
    position: absolute;
    display: flex;
    justify-content: center;
    background-color: blue;
    margin: -1;

    img {
        max-width: 100%; // A imagem não excederá a largura do container
        max-height: 100%; // A imagem não excederá a altura do container, mantendo a proporção
        width: auto; // Mantém a largura original até que o espaço disponível seja menor que a largura da imagem
        height: auto; // Mantém a altura proporcional à largura
    }
`;