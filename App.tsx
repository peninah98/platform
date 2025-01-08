import React from "react"
import { StyleSheet, Text, View, Platform } from "react-native"
import { LinearGradient } from "expo-linear-gradient"

const APP = () => {
  return (
    <View style={{ flex: 1, padding: 10, alignItems: "center" }}>
      <LinearGradient
        colors={["#bb52aa", "#63ff85"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}>
        <View style={styles.innerContainer}>
          {Platform.OS === "web" ? (
            <Text>The App is running on the web platform</Text>
          ) : (
            <Text>The App is running on the android platform</Text>
          )}
        </View>
        <View>
          <Text> {JSON.stringify(Platform.constants)}</Text>
        </View>
      </LinearGradient>
      <Text style={{ alignItems: "center" }}>
        Is this an iPad? {Platform.isPad ? "Yes" : "No"}
      </Text>
      <Text style={{ alignItems: "center" }}>
        Is this an isTv? {Platform.isTV ? "Yes" : "No"}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  linearGradient: {
    height: 150,
    width: 600,
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 80,
  },
  innerContainer: {
    borderRadius: 15,
    flex: 1,
    margin: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
    color: "#cc2b5e",
    backgroundColor: "transparent",
  },
})

export default APP
