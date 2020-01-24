/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

function Dashboard(props) {

  const goToCal = () => {
    props.navigation.navigate('Calculator');
  }

  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <TouchableOpacity style={styles.buttonView} onPress={goToCal}>
        <Text style={styles.sectionTitle}>go to calcaulte</Text>
      </TouchableOpacity>  
    </View>   
  );
};

const styles = StyleSheet.create({
  buttonView: {
    width:'70%',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#686868',
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    padding:20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#686868',
  },
});

export default Dashboard;
