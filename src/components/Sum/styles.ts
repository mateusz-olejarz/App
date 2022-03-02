import styled from 'styled-components'
import { DEVICE } from '../../constants'

export const Wrapper = styled.div`
    margin: 24px 0 0;

    @media ${DEVICE.LAPTOP} {
        margin: 42px 0 0;
    }
`
