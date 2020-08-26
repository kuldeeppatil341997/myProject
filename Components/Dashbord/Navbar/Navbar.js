import React , {Component, useState } from 'react';
import { Text, FlatList, View  } from 'react-native';
import { Icon } from 'react-native-elements'
import BottomNavigation, {
    FullTab
  } from 'react-native-material-bottom-navigation'
import styles from './css/NavbarStyle';

const Navbar = ({ tabs,changeTab, isActive, renderTab }) => {
    
      return (
        <View style={styles.container}>
          <BottomNavigation
            activeTab={isActive}
            onTabPress={newTab => changeTab(newTab) }
            renderTab={() => renderTab(tabs , isActive)}
            tabs={tabs}
          />
        </View>
      )
  }

  export default Navbar;