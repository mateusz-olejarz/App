import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Sum from './components/Sum';
import Table from './components/Table';
import './index.css'

const App: React.FC = (): React.ReactElement => {
  return (
    <>
      <Header />
      <Form />
      <Table />
      <Sum />
    </>
  );
}

export default App;
