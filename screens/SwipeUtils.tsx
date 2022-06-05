import React from "react";
import { StyleSheet, Animated, TouchableOpacity } from "react-native";

import { Text, View } from "../components/Themed";

export const BookRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation
) => {
  const opacity = dragX.interpolate({
    inputRange: [-150, 0],
    outputRange: [0.5, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.swipedRow}>
      <Animated.View style={[styles.editButton, { opacity }]}>
        <TouchableOpacity onPress={onPressEditBook}>
          <Text style={styles.editButtonText}> Edit </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.deleteButton, { opacity }]}>
        <TouchableOpacity onPress={onPressDeleteBook}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

function onPressEditBook() {
  console.log("Edit Book Pressed");
}
function onPressDeleteBook() {
  console.log("Delete Book Pressed");
}

export const ReaderRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation
) => {
  const opacity = dragX.interpolate({
    inputRange: [-150, 0],
    outputRange: [0.5, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.swipedRow}>
      <Animated.View style={[styles.editButton, { opacity }]}>
        <TouchableOpacity onPress={onPressEditReader}>
          <Text style={styles.editButtonText}> Edit </Text>
        </TouchableOpacity>
      </Animated.View>
      <Animated.View style={[styles.deleteButton, { opacity }]}>
        <TouchableOpacity onPress={onPressDeleteReader}>
          <Text style={styles.deleteButtonText}>Delete</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

function onPressEditReader() {
  console.log("Edit Reader Pressed");
}
function onPressDeleteReader() {
  console.log("Edit Reader Pressed");
}

export const ActivityRightActions = (
  progress: Animated.AnimatedInterpolation,
  dragX: Animated.AnimatedInterpolation
) => {
  const opacity = dragX.interpolate({
    inputRange: [-150, 0],
    outputRange: [0.5, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.returnSwipedRow}>
      <Animated.View style={[styles.returnButton, { opacity }]}>
        <TouchableOpacity onPress={onPressReturnBook}>
          <Text style={styles.returnButtonText}> Return </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

function onPressReturnBook() {
  console.log("Return Book Pressed");
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 5,
    backgroundColor: "#efefef",
    margin: 20,
    minHeight: 50,
  },
  swipedRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    minHeight: 50,
    minWidth: 90,
    maxWidth: 100,
  },
  swipedConfirmationContainer: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "#b60000",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    minWidth: 50,
  },
  deleteButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    padding: 3,
  },
  editButton: {
    backgroundColor: "#72A7C4",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    minWidth: 50,
  },
  editButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    padding: 3,
  },
  returnButton: {
    backgroundColor: "#72A7C4",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    minWidth: 90,
  },
  returnButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    padding: 3,
  },
  returnSwipedRow: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: "100%",
    minWidth: 90,
    maxWidth: 100,
  },
});
