/* eslint-disable react/jsx-no-bind */
import React from 'react'
import * as S from './styles'

interface InputProps {
    type: string,
    initialValue: string | number,
    setValue: Function,
    isError: boolean
}

const Input: React.FC<InputProps> = ({ type, initialValue, setValue, isError }): React.ReactElement => {
    return (
        <S.Input isError={isError} type={type} value={initialValue} onChange={e => setValue(e.target.value)} />
    )
}

export default Input
