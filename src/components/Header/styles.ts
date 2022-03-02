import styled from 'styled-components'
import { DEVICE } from '../../constants/constants'


export const Wrapper = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    & :first-child {
        margin-bottom: 10px;
    }

    @media ${DEVICE.MOBILE_L} {
        flex-direction: row;

        & :first-child {
            margin-bottom: 0;
        }
    }
`
