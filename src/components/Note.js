import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export function Note({ item, setSelectedNote }) {
  const categories = { Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB" }
  const styles = styleFunction(categories[item.categorie]);

  return (
    <TouchableOpacity style={styles.card} onPress={() => setSelectedNote(item)}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.categorie}>{item.categorie}</Text>
      <Text style={styles.text} numberOfLines={5}>{item.text}</Text>
    </TouchableOpacity>
  );
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
});
