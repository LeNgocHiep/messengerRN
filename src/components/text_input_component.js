import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export function TextInputComponent(props) {
  const [state, setState] = userState({ isLoading: false });
  return (
    <View style={[styles.mainContainer, { backgroundColor: "#ccc" }]}>
      <TextInput
        style={[style.textInput, { fontSize: 17 }]}
        placeholder={placeholder}
        placeholderTextColor="#000"
        onChangeText={(text) => updateFields(text)}
        secureTextEntry={placeholder == "Enter Password" ? true : false}
      />
    </View>
  );
}
const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderRadius: 5,
        height: 50,
        marginBottom: 10,
        width: '85%',
    },
    textInput: {
        paddingHorizontal: 10,
        width: '90%',
        paddingVertical: 0,
        color: '#000',
    },
});