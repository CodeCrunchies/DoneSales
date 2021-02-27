import React from 'react';
import { View, Stylesheets, Image } from 'react-native';

import Text from "./Text";
import colors from "./config/colors";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View styles={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={style.subTitle}>{subTitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: color.white,
    marginBottom: 20,
    overflow: "hidden",

  },

  detailsContainer: {
    padding: 20,
  },
  image: {
    with: "100%",
    height: 200,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    marginBottom: 7,
  }
});


export default Card,