import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../../redux/hooks'
import { CONVERSION_RATE } from '../../constants/constants'
import { sumObjectProperties } from '../../utils/sumObjectProperties'
import { roundNumber } from '../../utils/roundNumber'
import * as S from './styles'
import * as C from '../../constants/content'


const Sum: React.FC = (): React.ReactElement => {
    const transactions = useAppSelector(state => state.transactions.data)
    const [ sumPln, setSumPln ] = useState(0)
    const [ sumEur, setSumEur ] = useState(0)

    useEffect(() => {
        setSumPln(sumObjectProperties(transactions, 'amountPln'))
    }, [ transactions ])

    useEffect(() => {
        setSumEur(roundNumber(sumPln / CONVERSION_RATE, 2))
    }, [ sumPln ])

    return (
        <S.Wrapper>
            {C.SUM.title} {sumPln} {C.SUM.baseCurrency} &#40;{sumEur} {C.SUM.foreignCurrency}&#41;
        </S.Wrapper>
    )
}

export default Sum
