import { createGlobalStyle } from 'styled-components'
import { DEVICE } from '../../constants/constants'

const Typography = createGlobalStyle`
    html, p, label, span, input {
        font-family: 'Open Sans', sans-serif;
        font-weight: 500;
        font-size: 14px;

        @media ${DEVICE.MOBILE_M} {
            font-size: 16px;
        }
        @media ${DEVICE.TABLET} {
            font-size: 18px;
        }
        @media ${DEVICE.TABLET_L} {
            font-size: 20px;
        }
        @media ${DEVICE.LAPTOP} {
            font-size: 22px;
        }
    }

    h1, h2, h3, h4, h5 {
        font-weight: 600;
    }
    h1 {
        font-size: 20px;

        @media ${DEVICE.MOBILE_M} {
            font-size: 24px;
        }
        @media ${DEVICE.TABLET} {
            font-size: 28px;
        }
        @media ${DEVICE.TABLET_L} {
            font-size: 32px;
        }
        @media ${DEVICE.LAPTOP} {
            font-size: 36px;
        }
    }
`

export default Typography
