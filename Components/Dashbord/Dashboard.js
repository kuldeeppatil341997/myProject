import React, { useState } from 'react';
import { Animated, SafeAreaView, StatusBar, View, ScrollView } from 'react-native';
import SearchComponent from './SearchBar/SearchComponent';
console.disableYellowBox = true;
import Content from './Content';
import styles from './css/DashboardStyle';
import Navbar from './Navbar/Navbar';
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
import Bookings from '../Dashbord/Bookings';
import { Icon } from 'react-native-elements'
import FeedBack from './FeedBack';

const Dashboard = () => {
  const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
  const clampedScroll = Animated.diffClamp(
    Animated.add(
      scrollYValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolateLeft: 'clamp',
      }),
      new Animated.Value(0),
    ),
    0,
    50,
  )

  const [isActive,setActiveTab] = useState()
  
  const [tabs,setTabs] = useState([
    {
      key: 'home',
      icon: 'home',
      label: 'Home',
      barColor: '#388E3C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'bookings',
      icon: 'history',
      label: 'Bookings',
      barColor: '#B71C1C',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    },
    {
      key: 'feedback',
      icon: 'home',
      label: 'Feedback',
      barColor: '#E64A19',
      pressColor: 'rgba(255, 255, 255, 0.16)'
    }]   
  );

  const renderIcon = (icon) => ({})=> (
    <Icon size={24} color="white" name={icon} />
  )

  const renderTab = ({tab,isActive}) => (
    <FullTab 
      isActive={isActive}
      key= {tab.key}
      label={tab.label}
      renderIcon={renderIcon(tab.icon)}
    />
  )

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  return (
    <Animated.View>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <SearchComponent clampedScroll={clampedScroll} />
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.container}
          contentContainerStyle={styles.contentContainerStyle}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollYValue } } }],
            // { useNativeDriver: true },
            () => { },          // Optional async listener
          )}
          contentInsetAdjustmentBehavior="automatic">
          {/* {array.map(item => <LoaderComponent />)} */}
          {
            isActive == 'home' ? <Content /> :
            isActive == 'bookings' ? <Bookings /> : 
            isActive =='feedback' ? <FeedBack /> : <Content />
          }
          
          {/* <Content />     */}
        </Animated.ScrollView>
        <View style={styles.footer}>
        <BottomNavigation
            activeTab={isActive}
            onTabPress={newTab => setActiveTab(newTab.key)}
            renderTab={renderTab}
            tabs={tabs}
        />
        </View>
      </SafeAreaView>
    </Animated.View>
  );
};

export default Dashboard;
