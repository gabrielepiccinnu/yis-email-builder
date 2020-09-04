import React from 'react';
export { Container } from 'bootstrap';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
);