import React from "react";
import styled from "styled-components";
import { ScrollView, TouchableOpacity } from "react-native";
import Card from "../component/Card";
import Logo from "../component/Logo";
import * as WebBrowser from 'expo-web-browser';

export default class HomeScreen extends React.Component {

  render() {
    return(
      <Container>
        <Titlebar>
        <Titlebar2>
          <Avatar source = { require ("../icon/icons.png")} />
            <Title>ยินดีต้อนรับเข้าสู่</Title>
            <Name>PhuLae Application</Name>
            {/* <Ionicons 
              name = "md-add-circle-outline" 
              size = { 32 } 
              style = {{ position: "absolute", right: 20, top:5}}
              
            /> */}
            </Titlebar2>
        </Titlebar>
        <ScrollView >
        <Subtitle>ช่องทางการติดต่อสื่อสาร</Subtitle>
        <ScrollView style = 
            {{ 
                flexDirection: "row",
                padding: 20,
                paddingLeft: 12,
            }} 
              horizontal = {true}
              >
         
          {logos.map((logo, index) => (
            <TouchableOpacity
             key = { index }
             onPress = {() => {
              WebBrowser.openBrowserAsync( logo.urls )
             }}
         > 
                <Logo 
                image = {logo.image}
                text = {logo.text}
        
                />
                </TouchableOpacity>
          ))}
         
        </ScrollView>
        <Subtitle>ข้อมูลสำหรับ PhuLae Application</Subtitle>
        <ScrollView 
            horizontal = {true} 
            style = {{ paddingBottom: 30 }}
            showsHorizontalScrollIndicator
            >
        {cards.map((card, index) =>(
            <TouchableOpacity
                key = { index }
                onPress = {() => {
                    this.props.navigation.navigate("Section",{
                      section: card
                    })
                  }}
            >
             <Card 
             image = {card.image}
             caption = {card.caption}
             subtitle = {card.subtitle}
             />
             </TouchableOpacity>
        ))}
        </ScrollView>
        {/* <Subtitle>ข้อมูลข่าวสารอัพเดตรจากผู้พัฒนา</Subtitle> */}
        </ScrollView>
      </Container>
    );
  }
  
}


const logos = [
  {
    image: require("../icon/school.png"),
    text: "โรงเรียน",
    urls: 'http://www.tesaban6.ac.th/'
  },
  {
    image: require("../icon/facebook.png"),
    text: "เฟสบุ๊ค",
    urls: 'https://web.facebook.com/%E0%B8%99%E0%B8%A7%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B8%B4%E0%B8%96%E0%B8%B5%E0%B8%84%E0%B8%99-%E0%B8%A0%E0%B8%B9%E0%B9%80%E0%B9%80%E0%B8%A5-104915687767663/'
  },
  {
    image: require("../icon/youtube.png"),
    text: "ยูทูป",
    urls: 'https://www.youtube.com/channel/UCwyLXUJcllgdI9UK3ui6Bsw?view_as=subscriber&fbclid=IwAR17MLKFJAC2dYwBtUWOXzPN1YVSIG8wKjAuy1iULtroGSJ_F2qarrLZna0'
  }
]

const cards = [
  
  {
    image: require("../Data/page2/1.png"),
    caption: "PHLAE INSIDE",
    subtitle: "เพจ 1 จาก 5",
    image2: require("../Data/page2/2.png"),
    image3: require("../Data/page2/3.png"),
  },
  {
    image: require("../Data/page3/1.png"),
    caption: "กว่าจะเป็นภูแล",
    subtitle: "เพจ 2 จาก 5",
    image2: require("../Data/page3/2.png"),
    image3: require("../Data/page3/3.png"),
    image4: require("../Data/page3/4.png"),
    image5: require("../Data/page3/5.png"),
  },
  {
    image: require("../Data/page1/1.png"),
    caption: "ภูแลเบื้องหลังความสุข",
    subtitle: "เพจ 3 จาก 5",
    image2: require("../Data/page1/2.png"),
    image3: require("../Data/page1/3.png"),
    image4: require("../Data/page1/4.png"),
    image5: require("../Data/page1/5.png"),
    image6: require("../Data/page1/6.png"),
  },
  {
    image: require("../Data/page5/1.png"),
    image2: require("../Data/page5/2.png"),
    image3: require("../Data/page5/3.png"),
    image4: require("../Data/page5/4.png"),
    image5: require("../Data/page5/5.png"),
    image6: require("../Data/page5/6.png"),
    image7: require("../Data/page5/7.png"),
    caption: "บทสัมภาษณ์",
    subtitle: "เพจ 4 จาก 5"
  },
  {
    image: require("../Data/page4/1.png"),
    image2: require("../Data/page4/2.png"),
    image3: require("../Data/page4/3.png"),
    image4: require("../Data/page4/4.png"),
    image5: require("../Data/page4/5.png"),
    caption: "บทสัมภาษณ์",
    subtitle: "เพจ 4 จาก 5"
  },
  {
    image: require("../icon/developer.png"),
    image2: require("../icon/0001.jpg"),
    caption: "ผู้พัฒนา",
    subtitle: "เพจ 5 จาก 5"
  }
]


const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;  
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: #FF9900;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const Titlebar = styled.View`
  width: 100%;
  margin-bottom: 15px;
  padding-left: 80px;
  background-color: #FFD700;
`;

const Titlebar2 = styled.View`
  width: 100%;
  margin-top: 40px;
  margin-bottom: 15px;
  padding-left: 80px;
  background-color: #FFD700;
`;


const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #F8F8FF;
  font-weight: bold;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;
