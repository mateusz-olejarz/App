import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import App from '../App'

describe('App render tests', () => {
    it('renders header', () => {
    // Arrange
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // Assert
        expect(getByText(/List of expenses/i)).toBeInTheDocument()
        expect(getByText(/1EUR =/i)).toBeInTheDocument()
    })

    it('renders inputs', () => {
    // Arrange
        const { getByText, getAllByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // Assert
        expect(getByText(/Title of transaction/i)).toBeInTheDocument()
        expect(getAllByText(/Amount/i)[0]).toBeInTheDocument()
        expect(getByText(/Add/i)).toBeInTheDocument()
    })

    it('renders table', () => {
    // Arrange
        const { getByText, getAllByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // Assert
        expect(getAllByText(/Title/i)[1]).toBeInTheDocument()
        expect(getAllByText(/Amount/i)[1]).toBeInTheDocument()
        expect(getAllByText(/Amount/i)[2]).toBeInTheDocument()
        expect(getByText(/Options/i)).toBeInTheDocument()
    })

    it('renders sum', () => {
    // Arrange
        const { getByText } = render(
            <Provider store={store}>
                <App />
            </Provider>
        )

        // Assert
        expect(getByText(/SUM/i)).toBeInTheDocument()
    })
})
