import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import App from '../App';

describe('Input tests', () => {
  it('add transaction', () => {
    // Arrange
    const dom = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const titleInput = dom.getByLabelText('Title of transaction')
    const amountInput = dom.getByLabelText('Amount (in PLN)')

    // Act
    fireEvent.change(titleInput, {target: {value: 'Example'}})
    fireEvent.change(amountInput, {target: {value: '123'}})
    dom.getByText(/Add/i).click()

    // Assert
    expect(dom.getByText(/Example/i)).toBeInTheDocument()
  })
})
