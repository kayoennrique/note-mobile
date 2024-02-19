import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NoteEditor from "./src/components/NoteEditor";
import { Note } from "./src/components/Note";
import { useEffect, useState } from "react";
import { searchNote, tableCreate } from "./src/services/Notes";

export default function App() {

  useEffect(() => {
    tableCreate()
    showsNote()
  }, [])

  const [notes, setNotes] = useState([]);

  async function showsNote() {
    const allNotes = await searchNote();
    setNotes(allNotes);
    console.log(allNotes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={(note) => <Note {...note} />}
        keyExtractor={note => note.id} />
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
