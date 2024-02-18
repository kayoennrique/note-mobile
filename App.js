import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import NoteEditor from "./src/components/NoteEditor";
import { Note } from "./src/components/Note";
import { useEffect, useState } from "react";
import { tableCreate } from "./src/services/Notes";

export default function App() {

  useEffect(() => {
    tableCreate()
  }, [])

  const [notes, setNotes] = useState([]);

  async function showsNote() {
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
