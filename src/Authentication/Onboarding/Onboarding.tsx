import React from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

import Slide from "./Slide";

const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slider: {
    flex: 0.61,
  },
  footer: {
    flex: 1,
  },
});

const Onboarding = () => {
  return (
    <View style={styles.container}>
      <View style={styles.slider}>
        <ScrollView horizontal snapToInterval={width} decelerationRate="fast">
          <Slide label="Relaxed" />
          <Slide label="Playful" right />
          <Slide label="Exocentric" />
          <Slide label="Funky" right />
        </ScrollView>
      </View>
      <View style={styles.footer} />
    </View>
  );
};

export default Onboarding;
