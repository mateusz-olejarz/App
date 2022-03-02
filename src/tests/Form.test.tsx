import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import Table from '../components/Table'

describe('Table tests', () => {
    it('delete transaction', () => {
    // Arrange
        const dom = render(
            <Provider store={store}>
                <Table />
            </Provider>
        )

        // Act
        dom.getAllByText(/Delete/i)[0].click()

        // Assert
        expect(dom.queryAllByText(/New book about Rust/i)).toHaveLength(0)
    })
})