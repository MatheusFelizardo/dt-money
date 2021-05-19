import { FormEvent, useState } from 'react'
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/useTransactions';
import { Container, RadioButton, TransactionTypeContainer } from './style';
import Swal from 'sweetalert2'

Modal.setAppElement('#root');

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}
export default function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    
    const { createTransaction} = useTransactions()

    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')

    async function handdleSubmit(e:FormEvent){
        e.preventDefault();

        if(title === '' || category === '') {
            Swal.fire({
                title:'Preencha todos os campos!!',
                text: 'Título e categoria são campos obrigatórios.',
                icon: 'warning',
                showCloseButton: true,
                confirmButtonColor: 'var(--green)',
            })
            return
        }

        await createTransaction({
            title,
            category,
            type,
            amount
        })
        
        setTitle('')
        setCategory('')
        setAmount(0)
        setType('deposit')
        onRequestClose()
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose} 
            overlayClassName="react-modal-overlay" 
            className="react-modal-content"
        >   
            <button className="react-modal-close" onClick={onRequestClose}><img src="/assets/close.svg" alt="Fechar modal" /></button>
            
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" 
                placeholder="Titulo" 
                value={title} 
                onChange={({target})=> {setTitle(target.value)}} 
                />

                <input 
                type="number" 
                placeholder="Valor"
                value={amount} 
                onChange={({target})=> {setAmount(Number(target.value))}} 
                />

                <TransactionTypeContainer> 
                    <RadioButton 
                        onClick={()=> {setType('deposit')}}
                        type="button" 
                        isActive={ type === 'deposit'}
                        activeColor='green'
                        >
                        <img src="/assets/income.svg" alt="Entrada" />
                        <span>Entrada</span>
                    </RadioButton>

                    <RadioButton 
                        onClick={ ()=> {setType('withdraw')}}
                        type="button" 
                        isActive={ type === 'withdraw'} 
                        activeColor='red'
                        >
                        <img src="/assets/outcome.svg" alt="Saída" />
                        <span>Saída</span>
                    </RadioButton>

                </TransactionTypeContainer>
                <input 
                type="text" 
                placeholder="Categoria"
                value={category} 
                onChange={({target})=> {setCategory(target.value)}} 
                />


                <button type="submit" onClick={handdleSubmit}>Cadastrar</button>

            </Container>
        </Modal>
    )
}
