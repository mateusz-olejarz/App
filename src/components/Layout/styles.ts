import styled from 'styled-components'
import { DEVICE } from '../../constants'

export const Wrapper = styled.div`
    width: 100%;
    max-width: 880px;
    height: 100vh;
    margin: 0 auto;
    padding: 24px;

    @media ${DEVICE.MOBILE_M} {
      padding: 56px;
    }

    @media ${DEVICE.TABLET} {
      padding: 84px 56px;
    }

    @media ${DEVICE.LAPTOP} {
      max-width: 900px;
      padding: 110px 56px;
    }
`
