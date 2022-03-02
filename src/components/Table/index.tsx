import React from 'react';
import TableHead from '../TableHead';
import TableBody from '../TableBody';
import TableEmptyMessage from '../TableEmptyMessage';
import * as S from './styles'

const Table: React.FC = (): React.ReactElement => {
    return (
        <>
            <S.Table>
                <TableHead />
                <TableBody />
            </S.Table>
            <TableEmptyMessage />
        </>
    )
}

export default Table
