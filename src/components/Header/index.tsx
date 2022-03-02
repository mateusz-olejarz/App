import React from 'react'
import * as S from './styles'
import * as C from '../../content'


const Header: React.FC = (): React.ReactElement => {
    return (
        <S.Wrapper>
            <h1>
                {C.HEADER.title}
            </h1>
            <p>
                {C.HEADER.exchangeRate}
            </p>
        </S.Wrapper>
    )
}

export default Header
