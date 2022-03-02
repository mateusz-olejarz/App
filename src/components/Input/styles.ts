import styled from 'styled-components';

interface InputProps {
    isError: boolean;
}

export const Input = styled.input<InputProps>`
    width: 100%;
    height: 36px;
    padding: 0 10px;
    border: ${props => props.isError ? "1px solid #ff0000" : "1px solid #000"};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`
