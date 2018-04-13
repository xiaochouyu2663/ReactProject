/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
/**
 *  第一部分
 * 
 *  导入ReactNative包，导入ReactNative组件
 *  AppRegistry：js运行所有ReactNative应用的入口
 *  StyleSheet：ReactNative中使用的样式表，类似css样式表
 *  各种开发中需要使用的组件
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


/**
 * 第二部分
 * 创建ReactNative组件
 */
export default class MyApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}


/**
 * 第三部分
 * StyleSheet.create创建样式实例
 * 在应用中只会被创建一次，不用每次在渲染周期中重新创建
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


/**
 * 第四部分
 * 注册入口组件
 * 
 * AppRegistry:负责注册运行ReactNative应用程序的javascript入口
 * registerComponent:注册应用程序的入口组件。告知ReactNative哪一个组件被注册为应用的根容器
 * 第二个参数用的是es6的语法，箭头函数：
 * 返回的必须是定义的组件类的名字
 * 等价于
 * function (){
 *  return MyApp;
 * }
 */

AppRegistry.registerComponent('MyApp', () => MyApp);
