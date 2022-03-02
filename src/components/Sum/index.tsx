import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { CONVERSION_RATE } from '../../constants';
import { sumObjectProperties } from '../../utils/sumObjectProperties';
import { roundNumber } from '../../utils/roundNumber';
import * as S from './styles'


const Sum: React.FC = (): React.ReactElement => {
    const transactions = useAppSelector(state => state.transactions.data)
    const [sumPln, setSumPln] = useState(0)
    const [sumEur, setSumEur] = useState(0)

    useEffect(() => {
        setSumPln(sumObjectProperties(transactions, 'amountPln'))
    }, [transactions])

    useEffect(() => {
        setSumEur(roundNumber(sumPln / CONVERSION_RATE, 2))
    }, [sumPln])

    return (
        <S.Wrapper>
            Sum: {sumPln} PLN &#40;{sumEur} EUR&#41;
        </S.Wrapper>
    );
}

export default Sum;
