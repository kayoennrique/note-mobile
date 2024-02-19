import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NoteEditor from "./src/components/NoteEditor";
import { Note } from "./src/components/Note";
import { useEffect, useState } from "react";
import { searchNotes, tableCreate } from "./src/services/Notes";

export default function App() {

  useEffect(() => {
    tableCreate();
    showsNote();
  }, [])

  const [selectedNote, setSelectedNote] = useState({});
  const [notes, setNotes] = useState([]);

  async function showsNote() {
    const allNotes = await searchNotes();
    setNotes(allNotes);
    console.log(allNotes);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={notes}
        renderItem={(note) => <Note {...note} setSelectedNote={setSelectedNote} />}
        keyExtractor={note => note.id} />
      <NoteEditor showsNote={showsNote} selectedNote={selectedNote} setSelectedNote={setSelectedNote} />
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
