import React from "react"
import styled from "styled-components"
import { Button } from "react-native"

export default class LearningScreen extends React.Component {
   static navigationOptions = {
       header: null
   }
    render() {
        return (
            <Container>
                <Text>Section Screen</Text>
                <Button
                    title = "Close"
                    onPress = {() => {
                        this.props.navigation.navigate("Home")
                    }}
                />
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Text = styled.Text``;