import React from 'react';
import Container from 'bootstrap';
//export { Layout } from 'bootstrap';

export const Layout = (props) => (
    <Container>
        {props.children}
    </Container>
);
