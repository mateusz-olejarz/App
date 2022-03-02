import { createSlice } from '@reduxjs/toolkit'
import { Transaction } from '../../types'

export interface TransactionState {
    data: Array<Transaction>;
}

const initialState: TransactionState = {
    data: [
        {
            id: '1321',
            title: 'New book about Rust',
            amountPln: 100,
            amountEur: 22.82
        },
        {
            id: '412',
            title: 'Snacks for a football match',
            amountPln: 20,
            amountEur: 4.56
        },
        {
            id: '21',
            title: 'Bus ticket',
            amountPln: 2.55,
            amountEur: 0.58
        }
    ],
}

export const transactionSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setTransactions: (state, action) => {
            state.data = action.payload
        },
    }
})

export const { setTransactions } = transactionSlice.actions

export default transactionSlice.reducer
