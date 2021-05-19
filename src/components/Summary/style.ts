import styled from "styled-components";

export const Container = styled.header`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div { 
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;

        color: var(--text-title);

        header {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        strong {
            margin-top: 1rem;
            display: block;
            font-weight: 500;
            line-height: 3rem;
            font-size: 2rem;
        }

        &.highlight-background {
            background: var(--green);
            color: #FFF;
        }
    }
`
