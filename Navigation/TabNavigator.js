import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='DateCalculator' component ={DateCalculator} />
      <Tab.Screen name="Calendar" component={Calendar} />
    </Tab.Navigator>
  );
}