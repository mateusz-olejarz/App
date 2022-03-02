import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import * as S from './styles'
import * as C from '../../content'


const TableBody: React.FC = (): React.ReactElement => {
    const transactions = useAppSelector(state => state.transactions.data)

    return transactions.length === 0
        ? <S.TableEmptyMessage>{C.TABLE.emptyTableMessage}</S.TableEmptyMessage>
        : <></>
}

export default TableBody;
