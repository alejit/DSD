import React, { useState, useEffect } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Image,
  Animated,
  TouchableOpacity,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  let header = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const [Data, setData] = useState([]);
  const API = "http://192.168.0.101:8080/ords/global_modbd/carte";
  const fetchGet = () => {
    fetch(API, header)
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchGet();
  }, []);
  const renderRightActions = (
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
          <TouchableOpacity>
            <Text style={styles.editButtonText}> Edit </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={[styles.deleteButton, { opacity }]}>
          <TouchableOpacity>
            <Text style={styles.deleteButtonText}>Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };
  const renderItem = ({ item: carte }) => (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Text style={styles.title}>{carte.titlu}</Text>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/200/300",
          }}
        />
        <Text style={styles.stitle}>Cod:{carte.cod_carte}</Text>
        <Text style={styles.subtitle}>
          Categorie:{carte.cod_subcategorie} Exemplare:{carte.nr_exemplare}
        </Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" />
      </View>
    </Swipeable>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(Data) => Data.cod_carte}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  stitle: {
    fontSize: 15,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 10,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
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
});
