import styled from 'styled-components';

const Barra = styled.nav`
    width: 100%;
    padding: 8px;
    background-color: aqua;
    display: flex;
`;

const ContainerOption = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 16px;
    list-style-type: none;
`;


const Option = styled.li`
    font-weight: bold;
    &:hover {
        background-color: white;
        cursor: pointer;
    }
`;

export { Barra, ContainerOption, Option };