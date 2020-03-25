import React from "react"
import styled from "styled-components"
import { TouchableOpacity, StatusBar, ScrollView } from "react-native"

import { Ionicons } from "@expo/vector-icons";


export default class SectionScreen extends React.Component {
   static navigationOptions = {
       header: null
   }

   componentDidMount() {
       StatusBar.setBarStyle("light-content", true)
   }

   componentWillUnmount() {
       StatusBar.setBarStyle("dark-content", true)
   }

    render() {

        const { navigation } = this.props;
        const section = navigation.getParam("section");

        return (
            
            <Container>
               <ScrollView>
                <Cover>
                    <Image source = { section.image } />
                </Cover>

                <Content><Image source = { section.image2 } /></Content>
                <Content><Image source = { section.image3 } /></Content>
                <Content><Image source = { section.image4 } /></Content>
                <Content><Image source = { section.image5 } /></Content>
                <Content><Image source = { section.image6 } /></Content>
                <Content><Image source = { section.image7 } /></Content>
                
                </ScrollView>
                <TouchableOpacity 
                    style = {{
                        position: "absolute",
                        top: 20,
                        right: 20
                    }}
                    onPress = {() => {
                        this.props.navigation.navigate("Home")
                      }}
                >
                <CloseView>
                <Ionicons 
                        name = "md-close-circle-outline" 
                        size = { 36 }
                        color = "#4775f2" 
                        />
                </CloseView>
                </TouchableOpacity>
            </Container>
        )
    }
}

const Container = styled.View`
    flex: 1;
`;

const Cover = styled.View`
    height: 599px;
`;

const CloseView = styled.View`
    width: 32px;
    height: 32px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
    justify-content: center;
    align-items: center;

`;

const Image = styled.Image`
    width: 100%;
    height: 100%;
    margin-bottom: 15px;
    top: 0;
    left: 0;
`;

const Content = styled.View`
    height: 599px;
`;
