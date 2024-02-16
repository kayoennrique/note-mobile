import { SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NoteEditor from "./src/components/NoteEditor"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NoteEditor />
      <StatusBar />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
})
