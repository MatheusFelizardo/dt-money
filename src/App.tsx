import Dashboard from './components/Dashboard';
import Header from './components/Header';
import { GlobalStyle } from './styles/global';
import { useState } from 'react'
import NewTransactionModal from './components/NewTransacionModal';
import { TransactionProvider } from './hooks/useTransactions';

function App() {

  const [isNewTransctionModalOpen, setIsNewTransctionModalOpen] = useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransctionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransctionModalOpen(false)
    }


  return (
    <TransactionProvider>
      <GlobalStyle />
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal isOpen={isNewTransctionModalOpen} onRequestClose={handleCloseNewTransactionModal}  />
      
    </TransactionProvider>
  );
}

export default App;
