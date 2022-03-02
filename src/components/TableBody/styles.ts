import styled from 'styled-components';

export const TableBody = styled.tbody`
    width: 100%;

    & tr:nth-of-type(2n) {
        background-color: #ECECEC;
    }

    & td {
        width: 100%;
        padding: 20px 8px;
        border: 1px solid #000;
        bordercollapse: collapse;
    }
`

export const Button = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`
