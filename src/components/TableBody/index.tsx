import React from 'react'
import { uniqueId } from 'lodash'
import { setTransactions } from '../../redux/reducers/transactionsReducer'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Transaction } from '../../types'
import * as S from './styles'
import * as C from '../../content'


const TableBody: React.FC = (): React.ReactElement => {
    const dispatch = useAppDispatch()
    const transactions = useAppSelector(state => state.transactions.data)

    const removeTransaction = (id: string): void => {
        dispatch(setTransactions([ ...transactions ].filter((el: Transaction) => el.id !== id)))
    }

    return (
        <S.TableBody>
            {
                transactions.length !== 0 && transactions.map((transaction: Transaction) => {
                    return (<tr key={uniqueId()}>
                        <td>{transaction.title}</td>
                        <td>{transaction.amountPln}</td>
                        <td>{transaction.amountEur}</td>
                        <td>
                            <S.Button onClick={() => removeTransaction(transaction.id)}>
                                {C.TABLE.deleteButton}
                            </S.Button>
                        </td>
                    </tr>)
                })
            }
        </S.TableBody>
    )
}

export default TableBody
