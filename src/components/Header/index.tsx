
import { Container, Content } from './style'

interface HeaderProps {
    onOpenNewTransactionModal: ()=>void;
}

export default function Header({onOpenNewTransactionModal}: HeaderProps) {

    
    return (
        
        <Container>
            <Content>
                <img src="/assets/logo.svg" alt="dt money" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
        </Container>
    )
}
