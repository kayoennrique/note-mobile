import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NoteEditor from "./src/components/NoteEditor";
import { useState } from "react";

export default function App() {

  const [notes, setNotes] = useState([]);

  async function showsNote() {
    const allKeys = await AsyncStorage.getAllKeys();
    const allNotes = await AsyncStorage.multiGet(allKeys);
    setNotes(allNotes);
    console.log(allNotes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <NoteEditor showsNote={showsNote} />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
