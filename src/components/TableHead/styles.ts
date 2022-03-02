import styled from 'styled-components'

export const TableHead = styled.thead`
    width: 100%;
    background-color: #ccc;

    & th {
        width: 100%;
        padding: 20px 8px;
        border: 1px solid #000;
        bordercollapse: collapse;
    }
`

export const TableHeading = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`

export const Arrow = styled.button`
    border: none;
    background-color: transparent;
`
