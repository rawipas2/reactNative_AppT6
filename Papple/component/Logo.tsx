import React from 'react'
import styted from 'styled-components'

const Logo = props => (
    <Container>
        <Image source = {props.image} resizMode = "contain" />
        <Text>{props.text}</Text>
    </Container>
);

export default Logo;

const Container = styted.View`
    flex-direction: row;
    background: white;
    height: 60px
    padding: 12px 16px 12px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
    align-items: center;
    margin: 0 8px;
`;

const Image = styted.Image`
    width: 30px;
    height: 30px;
`;

const Text = styted.Text`
    font-weight: 600;
    font-size: 17px;
    margin-left: 8px;
`;