import { SafeAreaView, StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import React from 'react';
import InputForm from '../components/InputForm'

const MainScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'default'} />
      <Text style={styles.pageTitle}>ToDo App</Text>
      <View style={styles.listView}>
        <Text style={styles.listTitle}>할 일</Text>
      </View>
      <View style={styles.separator} />
      <View style={styles.listView}>
        <Text style={styles.listTitle}>완료된 일</Text>
      </View>
      <InputForm />
    </SafeAreaView>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // 패딩을 0을 주는 이유는 위에 SafeAreaView를 사용하여 StatusBar를 제외할 수 있기 때문
    paddingTop: Platform.OS === 'android' ? 20 : 0, 
    backgroundColor: '#f7f8fa',
  },

  pageTitle:{
    marginBottom: 35,
    paddingHorizontal: 15,
    fontSize: 54,
    fontWeight: '600'
  },

  separator: {
    marginHorizontal: 10,
    marginTop: 25,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)'
  },

  listView: {
    flex: 1,
  },

  listTitle: {
    marginBottom: 25,
    paddingHorizontal: 15,
    fontSize: 41,
    fontWeight: '300'
  }
});
