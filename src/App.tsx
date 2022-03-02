import React from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Layout from './components/Layout';
import Sum from './components/Sum';
import Table from './components/Table';
import './index.css'

const App: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <Header />
      <Form />
      <Table />
      <Sum />
    </Layout>
  );
}

export default App;
