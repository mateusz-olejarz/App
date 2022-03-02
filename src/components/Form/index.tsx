import React, { useEffect, useState } from 'react';
import { uniqueId } from 'lodash';
import { setTransactions } from '../../redux/reducers/transactionsReducer';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { roundNumber } from '../../utils/roundNumber';
import { Transaction } from '../../types';
import { CONVERSION_RATE } from '../../constants';
import Input from '../Input';
import * as S from './styles'
import * as C from '../../content'


const Form: React.FC = (): React.ReactElement => {
  const dispatch = useAppDispatch()
  const transactions = useAppSelector(state => state.transactions.data)
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [isTitleError, setIsTitleError] = useState(false)
  const [isAmountError, setIsAmountError] = useState(false)
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    title && setIsTitleError(title.length < 5)
  }, [title])

  useEffect(() => {
    amount && amount.split('.')[1] && setIsAmountError(amount.split('.')[1].length > 2)
  }, [amount])

  useEffect(() => {
    setIsError(isTitleError || isAmountError)
  }, [isTitleError, isAmountError])


  const resetInputs = (): void => {
    setTitle('')
    setAmount('')
  }

  const submit = (event: React.FormEvent): void => {
    event.preventDefault()

    if (!isError && title && amount) {
      const newTransaction: Transaction = {
        id: uniqueId(),
        title: title,
        amountPln: parseFloat(amount),
        amountEur: roundNumber(parseFloat(amount) / CONVERSION_RATE, 2),
      }
      dispatch(setTransactions([...transactions, newTransaction]))
      resetInputs()
    }
  }

  return (
    <S.Form onSubmit={submit}>
      <S.InputWrapper>
        <S.LabeledInput>
          <S.Label>
            {C.FORM.transactionInputLabel}
          </S.Label>
          <Input type='text' initialValue={title} setValue={setTitle} isError={isTitleError} />
        </S.LabeledInput>
        <S.LabeledInput>
          <S.Label>
            {C.FORM.amountInputLabel}
          </S.Label>
          <Input type='number' initialValue={amount} setValue={setAmount} isError={isAmountError} />
        </S.LabeledInput>
      </S.InputWrapper>
      <S.Button>{C.FORM.addButton}</S.Button>
    </S.Form>
  )
}

export default Form
