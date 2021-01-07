import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface SlideProps {
  label: string;
  right?: boolean;
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {},
});

const Slide = ({ label, right }: SlideProps) => {
  return (
    <View style={{ width }}>
      <Text>{label}</Text>
    </View>
  );
};

export default Slide;
