import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Image } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { BookRightActions } from "./SwipeUtils";

export default function BooksScreen({
  navigation,
}: RootTabScreenProps<"Books">) {
  let header = {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json; charset=utf-8",
    },
  };
  const [Data, setData] = useState([]);
  const API = "http://192.168.100.30:8080/ords/oltpmodbd/carte";
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

  const renderItem = ({ item: carte }) => (
    <Swipeable renderRightActions={BookRightActions}>
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
        <EditScreenInfo path="/screens/BooksScreen.tsx" />
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
});
