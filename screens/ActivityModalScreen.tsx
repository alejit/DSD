import React, { Component } from "react";
import { Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { View } from "../components/Themed";

const api = "http://192.168.100.30:8080/ords/oltpmodbd/imprumuta";
export default class ActivityModalScreen extends Component {
  state = {
    cod_cititor: "test",
    cod_carte: "test",
    data_imprumut: "",
    data_restituire: "",
    termen_limita: "",
  };

  constructor(props: any) {
    super(props);
    this.state = {
      cod_cititor: "test",
      cod_carte: "test",
      data_imprumut: "",
      data_restituire: "",
      termen_limita: "",
    };
  }

  handleButtonPress() {
    const params = {
      cod_cititor: this.state.cod_cititor,
      cod_carte: this.state.cod_carte,
      data_imprumut: this.state.data_imprumut,
      data_restituire: this.state.data_restituire,
      termen_limita: this.state.termen_limita,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    };
    fetch(api, requestOptions)
      .then((response) => {
        // console.log(api);
        // console.log(requestOptions);
        // console.log(response);
        return response;
      })
      // .then((data) => this.setState({ cod_cititor: data.cod_cititor }))
      .catch((error) => {
        console.error(error);
        console.log("Error return");
      });
    console.log("Submitted return");
  }

  render() {
    return (
      <View>
        <TextInput
          style={this.styles.input}
          placeholder="Cod cititor"
          onChangeText={(cod_cititor) => this.setState({ cod_cititor })}
        />
        <TextInput
          style={this.styles.input}
          placeholder="Cod carte"
          onChangeText={(cod_carte) => this.setState({ cod_carte })}
        />
        <TextInput
          style={this.styles.input}
          placeholder="Data imprumut"
          onChangeText={(data_imprumut) => this.setState({ data_imprumut })}
        />
        <TextInput
          style={this.styles.input}
          placeholder="Data restituire"
          onChangeText={(data_restituire) => this.setState({ data_restituire })}
        />
        <TextInput
          style={this.styles.input}
          placeholder="Termen limita"
          onChangeText={(termen_limita) => this.setState({ termen_limita })}
        />
        <Button title="SUBMIT" onPress={this.handleButtonPress.bind(this)} />
      </View>
    );
  }

  styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
}
