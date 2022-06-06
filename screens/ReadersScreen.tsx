import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Image } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { ReaderRightActions } from "./SwipeUtils";

export default function ReadersScreen({
  navigation,
}: RootTabScreenProps<"Activity">) {
  let get = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const [Data, setData] = useState([]);
  const API = "http://192.168.100.30:8080/ords/oltpmodbd/cititor";
  const fetchGet = () => {
    fetch(API, get)
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

  const renderItem = ({ item: cititor }) => (
    <Swipeable renderRightActions={ReaderRightActions}>
      <View style={styles.container}>
        <Text style={styles.title}>
          {cititor.nume} {cititor.prenume}
        </Text>
        <Image
          source={{
            width: 200,
            height: 300,
            uri: "https://picsum.photos/id/1010/200/300",
          }}
        />
        <Text style={styles.stitle}>Cod:{cititor.cod_cititor}</Text>
        <Text style={styles.stitle}>
          Legitimatie:{cititor.serie_legitimatie}
        </Text>
        {/* <Text style={styles.subtitle}>Localitate:{cititor.localitate} Email:{cititor.email}</Text> */}
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
        <EditScreenInfo path="/screens/BooksScreen.tsx" />
      </View>
    </Swipeable>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(Data) => Data.cod_cititor}
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
    fontSize: 10,
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
});
