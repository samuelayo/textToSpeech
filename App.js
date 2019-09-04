
import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  ImageBackground
} from 'react-native';
import Constants from 'expo-constants';
import * as Speech from 'expo-speech';
export default class App extends React.Component {

  speak() {
    var textToSay = 'React is King. Well, React Native';
    Speech.speak(textToSay);
  }
  render() {
    return (
      <Fragment>
        <SafeAreaView>
          <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <ImageBackground
              accessibilityRole={'image'}
              source={require('./logo.png')}
              style={styles.background}
              imageStyle={styles.logo}>
              <Text style={styles.text}>Text to Speech in React Native</Text>
            </ImageBackground>
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step One</Text>
                <Text style={styles.sectionDescription}>
                  Set your <Text style={styles.highlight}>textToSay</Text> variable in <Text style={styles.highlight}>App.js</Text>
                </Text>
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Step Two</Text>
                <Text style={styles.sectionDescription}>
                  Press the button below
                </Text>
              </View>
            </View>
            <View style={styles.container}>
              <Button title="Speak" onPress={this.speak} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#ecf0f1',
  },
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    marginLeft: -128,
    marginBottom: -192,
  },
  text: {
    fontSize: 40,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000000',
  },
  scrollView: {
    backgroundColor: '#ecf0f1',
  },
  body: {
    backgroundColor: '#ecf0f1',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  highlight: {
    fontWeight: '700',
  },
}); 