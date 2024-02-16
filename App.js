import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NoteEditor from "./src/components/NoteEditor";
import { Note } from "./src/components/Note";
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
      <FlatList
        data={notes}
        renderItem={(note) => <Note {...note} />}
        keyExtractor={note => note[0]} />
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
