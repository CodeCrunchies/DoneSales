
```bash
json.config
```
this file tells VS code to treat this project as a JavScript project, because by default it treats it as typescript project;
### in App.js
## Image static
```js
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function App() {
  /* console.log(require('./assets/icon.png')) */

  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={(handlePress)}>Hello from DoneSales! It is a really , really nice platform where you can find lots of interesting stuff. This is my platform for selling second hand stuff, you can find what you are looking to.</Text>
      <Image source={require('./assets/icon.png')} /> // render local or static images
      // when require function is used, React Native packager will include this file in the bundle, so it is going to increase the size of the app. So static images should be used if they really have to shift with the app, like the icon or splash screen,
      // the require function reads the metadata of the images in the app
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

###  App.js



## VIEWS 
In React Native there is no html elements like `<div> </div>`.  **View** in React Native is a container component for building UI. It is like a `**<div></div>**` It is used for grouping or laying out children. Check the Documentation: 👇
[View Component](https:https://reactnative.dev/docs/view)
```js

import React from 'react';
import {Stylesheets, Text, View, SafeAriaView } from "react-native";

export default function App() {

  <SafeAriaView style={styles.container}>
  <text>Hello React Native</text>
  </SafeAriaView>
  );
}

const styles = StyleSheets.create({
  container: {
  flex:1, // means that this view is flexible & it can grow both horizontally and vertically,to fill the free space; in this case it takes the entire screen,
  backgroundColor: "dodgerblue",
  alignItems: "center",
  justifyContent:"center",
  },
})

// in iOS be cacreful with the notch not to cover the text, 
// safeAreaView add bit of padding on the top to make sure that the content is within the safe area, 
```

### Text Component 
👉 **<Text>** is the second fundamental component in React Native, used to display text. Here text cannot be placed just anywhere within JSX, as in web applications, the text should be wrapped with text component. Look at the documentation: 
[Text Component](https://reactnative.dev/docs/text).  Text Component has PROPS.


### App.js

```js

import React from 'react';
import {Stylesheets, Text, View, SafeAriaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("Text pressed")

return ( 
  <SafeAriaView style={styles.container}>
  <text numberOfLines={1} onPress={handlePress}>Hello React Native. A really very big text, </text>

 /*  <text numberOfLines={1} onPress={() => console.log("Text clicked")}>Hello React Native. A really very big text, </text> */

  // the text can make like a link using the unpressed prop or event
  </SafeAriaView>
  );
}

const styles = StyleSheets.create({
  container: {
  flex:1, // means that this view is flexible & it can grow both horizontally and vertically,to fill the free space; in this case it takes the entire screen,
  backgroundColor: "dodgerblue",
  alignItems: "center",
  justifyContent:"center",
  },
})



```

## Image Component 
Check the Documentation: 👇
[Image Component](https://reactnative.dev/docs/image)

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  /* console.log(require("./assets/favicon.png")); */
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", // image from network
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## Touchable Component

Check the Documentation: 👇
[TouchableHighlight Component](https://reactnative.dev/docs/touchablehighlight)
[TouchableOpacity Component](https://reactnative.dev/docs/touchableopacity)
[TouchableWithoutFeedback Component](https://reactnative.dev/docs/touchablewithoutfeedback)

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  /* console.log(require("./assets/favicon.png")); */
  return (
    <SafeAreaView style={styles.container}>
      <Text > Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", // image from network
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## BUTTON

Check the Documentation: 👇
[BUTTON Component](https://reactnative.dev/docs/button)

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## ALERT 

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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
## StyleSheets Component

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

### Dimensions

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## Detecting Orientation Changes 

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

### FLEXBOX Component

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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
## FlexBox Direction Changes

Check the Documentation: 👇
[Component]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## FlexBox - justifyContent, alignItems, alignSelf 

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## FlexBox - flexWrap & alignContent -

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## FlexBox - flexBasis, flexGrow, flexShrink and

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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

## Absolute & Relative Positioning 

Check the Documentation: 👇
[]()

```js

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, SafeAreaView } from 'react-native';

export default function App() {

  
  return (
    <SafeAreaView style={styles.container}>
      <Text> Hello</Text>
      <TouchableOpacity onPress={() => console.log('Image tapped')}>

        <Image
          blurRadius={2}
          fadeDuration={1000}
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/237/200/300", 
          }} />
      </TouchableOpacity>
       <StatusBar style="auto" />
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
## Styling 

## Borders Component

## Shadows

```js

<View> 
style={{
  backgroundColor: "dodgerblue",
  width: 100,
  height: 100,
  shadowColor: "grey",
  shadowOffset: {width: 0, height: 10},
  shadowOpacity: 10,
  shadowRadius: 10,
  elevation:20,

}}
</View>
```

### Paddings & Margins

👉 Padding is the space **inside the component**;
👉 Margin is the space **around** the component
```js
<View> 
  style={{
     backgroundColor: "dodgerblue",
      width: 100,
      height: 100,
      padding:20,
      paddingHorizontal: 10,

  }} 
  </View>
  >
  <View style={{
    backgroundColor: "gold",
    width:50,
    height:50,
  }}
  >
  </View>

}}
</View>
);
}

```

## Styling Text 

[Expo - Using Custom Fonts](https://docs.expo.io/guides/using-custom-fonts/)
```js


```
## FORMS Component

[Formik](https://formik.org/)