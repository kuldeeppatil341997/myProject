import React, { useState, Component } from 'react';
import { Text, FlatList, View  } from 'react-native';
import styles from './css/ContentStyle';

class Content extends Component {

    render(){
        return(
            <FlatList style={styles.container}
                      data={[  
                            {key: 'Android'},{key: 'iOS'}, {key: 'Java'},{key: 'Swift'},  
                            {key: 'Php'},{key: 'Hadoop'},{key: 'Sap'}
                      ]}  
                      renderItem={({item}) => (
                          <View style={styles.block}>
                                <View style={styles.innerBlock1}></View>
                                <View style={styles.innerBlock2}></View>
                          </View>
                      )}
            />
        )
    }
}

export default Content;
