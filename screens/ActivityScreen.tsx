import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Image } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function ActivityScreen({
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
  const API = "http://192.168.0.101:8080/ords/global_modbd/imprumuta";
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

  const renderItem = ({ item: imprumut }) => (
    <View style={styles.container}>
      <Text style={styles.title}>
        {imprumut.cod_cititor} - {imprumut.cod_carte}
      </Text>
      <Text style={styles.subtitle}>
        Data Imprumut:{imprumut.data_imprumut}
      </Text>
      <Text style={styles.subtitle}>
        Data Restituire:{imprumut.data_restituire}
      </Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/BooksScreen.tsx" />
    </View>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={(Data) => Data.cod_cititor * 1000 + Data.cod_carte}
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
  subtitle: {
    fontSize: 10,
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
