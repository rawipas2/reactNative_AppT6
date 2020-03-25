import {    createSwitchNavigator,
            createAppContainer
        } from "react-navigation"

import HomeScreen from "../screen/HomesScreen"
import SectionScreen from "../screen/SectionScreen"

const AppNavigator = createSwitchNavigator ({
    Home: HomeScreen,
    Section: SectionScreen
})

export default createAppContainer(AppNavigator);