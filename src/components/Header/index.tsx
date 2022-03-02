import React from 'react';
import { HEADER } from '../../content';
import * as S from './styles'


const Header: React.FC = (): React.ReactElement => {
    return (
        <S.Wrapper>
            <h1>
                {HEADER.title}
            </h1>
            <p>
                {HEADER.exchangeRate}
            </p>
        </S.Wrapper>
    );
}

export default Header;
