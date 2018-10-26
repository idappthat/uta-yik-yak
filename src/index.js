import { createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import Scenes from './scenes';

export default createSwitchNavigator({
  auth: createStackNavigator({
    splash: Scenes.Splash,
    login: Scenes.Login,
    register: Scenes.Register
  }),
  main: createBottomTabNavigator({
    home: createStackNavigator({
      yeets: Scenes.Home,
    }),
    me: createStackNavigator({
      profile: Scenes.Profile
    })
  }),
  add: createStackNavigator({
    input: Scenes.InputPage
  })
});
