import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Note({ item }) {
  const categories = { Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB" }
  const style = styleFunction(categories["Pessoal"])

  return (
    <View style={style.card}>
      <Text style={style.text} numberOfLines={5}>{item[1]}</Text>
    </View>
  )
}

const styleFunction = (color) => StyleSheet.create({
  card: {
    borderRadius: 8,
    backgroundColor: "#ffffff",
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 8,
    borderTopWidth: 5,
    borderColor: color,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 4,
  },
  categorie: {
    borderRadius: 4,
    backgroundColor: color,
    padding: 4,
    color: "#FAFAFA",
    alignSelf: "flex-start",
  },
  text: {
    lineHeight: 28,
  }
})
