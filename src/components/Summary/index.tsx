import React, { useContext } from 'react'
import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './style'

export default function Summary() {

    const {transactions} = useTransactions()

    const summary = transactions.reduce((acc, transaction) => {

        if (transaction.type === 'deposit') {
            acc.deposits += transaction.amount
            acc.total += transaction.amount
        } else {
            acc.withdraws -= transaction.amount
            acc.total -= transaction.amount
        }

        return acc

    }, {
        deposits:0,
        withdraws:0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src="/assets/income.svg" alt="Entradas" />
                </header>

                <strong>
                {Intl.NumberFormat('pt-BR', {style: 'currency',currency: "BRL", }).format(summary.deposits)}
                </strong>
            </div>

            <div>
                <header>
                    <p>Saídas</p>
                    <img src="/assets/outcome.svg" alt="Saídas" />
                </header>

                <strong>
                    {Intl.NumberFormat('pt-BR', {style: 'currency',currency: "BRL", }).format(summary.withdraws)}
                </strong>
            </div>

            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src="/assets/total.svg" alt="Total" />
                </header>

                <strong>
                    {Intl.NumberFormat('pt-BR', {style: 'currency',currency: "BRL", }).format(summary.total)} 
                </strong>
            </div>

        </Container>
    )
}
