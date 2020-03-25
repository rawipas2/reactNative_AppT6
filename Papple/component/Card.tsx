import React from "react";
import styted from "styled-components";

const Card = props => (
    <Container>
        <Cover>
            <Image source = {props.image}/>
            <Title>{props.title}</Title>
        </Cover>
        <Content>
            <Wrapper>
                <Caption>{props.caption}</Caption>
                <Subtitle>{props.subtitle}</Subtitle>
            </Wrapper>
        </Content>
    </Container>
)


const Wrapper = styted.View``;

const Image = styted.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

const Content = styted.View`
    padding-left: 20px;
    flex-direction: row;
`;

const Caption = styted.Text`
    colorL #3c4560;
    font-size: 20px;
    font-weight: 600;
`;
const Subtitle = styted.Text`
    color: white;
    font-size: 15px;
    font-weight: 600;
`;

const Cover = styted.View`
    width: 100%;
    height: 250px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`;

const Title = styted.Text`
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-top: 20px;
    margin-left: 20px;
    width: 170px;    
`;

const Container = styted.View`
    background: #FFD700;
    width: 300px;
    height: 350px;
    border-radius: 14px;
    margin-left: 20px;
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;



export default Card;