import styled from 'styled-components';
import { DEVICE } from '../../constants'

export const Form = styled.form`
    padding: 24px 0 32px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${DEVICE.MOBILE_L} {
        padding: 30px 0 40px;
    }

    @media ${DEVICE.TABLET} {
        padding: 36px 0 50px;
        flex-wrap: nowrap;
        flex-direction: row;
        justify-content: space-between;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;

    @media ${DEVICE.MOBILE_L} {
        width: 100%;
    }

    @media ${DEVICE.TABLET} {
        max-width: 500px;
    }

    @media ${DEVICE.TABLET_L} {
        max-width: 550px;
    }
`

export const LabeledInput = styled.label`
    margin: 0 0 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

    & :last-child {
        max-width: 300px;
    }

    @media ${DEVICE.MOBILE_L} {
        flex-direction: row;
        justify-content: space-between;
    }

    @media ${DEVICE.TABLET} {
        margin: 0;

        &:not(:last-child) {
            margin-bottom: 32px;
        }
    }
`

export const Label = styled.span`
    margin: 0 0 8px 0;

    @media ${DEVICE.MOBILE_L} {
        min-width: 140px;
        margin: 0 24px 0 0;
    }

    @media ${DEVICE.TABLET} {
        width: 40%;
    }
`

export const Button = styled.button`
    width: 100%;
    max-width: 160px;
    height: 36px;
    border: 1px solid #000;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        background-color: rgba(0,0,0,0.2)
    }

    @media ${DEVICE.TABLET} {
        margin: 0 0 0 24px;
        align-self: end;
    }

    @media ${DEVICE.TABLET_L} {
        margin: 2px 0 2px 24px;
    }

    @media ${DEVICE.LAPTOP} {
        margin: 4px 0 4px 24px;
    }
`
