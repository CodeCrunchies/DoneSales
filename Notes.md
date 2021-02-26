
```bash
json.config
```
this file tells VS code to treat this project as a JavScript project, because by default it treats it as typescript project;

```js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  const handlePress = () => console.log("Text pressed")

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={(handlePress)}>Hello from DoneSales! It is a really , really nice platform where you can find lots of interesting stuff. This is my platform for selling second hand stuff, you can find what you are looking to.</Text>
      <Image source={require('./assets/icon.png')} />
      /*  <StatusBar style="auto" />  */
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```