import { Picker } from "@react-native-picker/picker";
import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function NoteEditor({ showsNote }) {
  const [title, setTitle] = useState("");
  const [categorie, setCategorie] = useState("Pessoal");
  const [text, setText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  async function noteSave() {
    const oneNote = {
      id: "",
      text: text,
    }
    console.log(oneNote);
    showsNote();
  }

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => { setModalVisible(false) }}
      >
        <View style={styles.centerModal}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.modal}>
              <Text style={styles.modalTitle}>Criar nota</Text>
              <Text style={styles.modalSubTitle}>Titulo da nota</Text>
              <TextInput
                style={styles.modalInput}
                onChangeText={newTitle => setTitle(newTitle)}
                placeholder="Digite um titulo"
                value={title} />
              <Text style={styles.modalSubTitle}>Categoria</Text>
              <Picker
                selectedValue={categorie}
                onValueChange={newCategorie => setCategorie(newCategorie)}>
                <Picker.Item label="Pessoal" value="Pessoal" />
                <Picker.Item label="Trabalho" value="Trabalho" />
                <Picker.Item label="Outros" value="Outros" />
              </Picker>
              <Text style={styles.modalSubTitle}>Conteúdo da nota</Text>
              <TextInput
                style={styles.modalInput}
                multiline={true}
                numberOfLines={3}
                onChangeText={newText => setText(newText)}
                placeholder="Digite aqui seu lembrete"
                value={text} />
              <View style={styles.modalPicker}>
              </View>
              <View style={styles.modalButtons}>
                <TouchableOpacity style={styles.modalSaveButton} onPress={() => { noteSave() }}>
                  <Text style={styles.modalButtonText}>Salvar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonCancel} onPress={() => { setModalVisible(false) }}>
                  <Text style={styles.modalButtonText}>Cancelar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => { setModalVisible(true) }} style={styles.addMemo}>
        <Text style={styles.addMemoText}>+</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  centerModal: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  modal: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    marginTop: 8,
    marginHorizontal: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  modalTitle: {
    fontSize: 28,
    fontWeight: "600",
    marginBottom: 18,
  },
  modalInput: {
    fontSize: 18,
    marginBottom: 12,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#FF9A94",
  },
  modalPicker: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#EEEEEE",
    marginBottom: 12,
  },
  modalSubTitle: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: "600"
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  modalSaveButton: {
    backgroundColor: "#2ea805",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalBotaoDeletar: {
    backgroundColor: "#d62a18",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalButtonCancel: {
    backgroundColor: "#057fa8",
    borderRadius: 5,
    padding: 8,
    width: 80,
    alignItems: "center",
  },
  modalButtonText: {
    color: "#FFFFFF",
  },
  addMemo: {
    backgroundColor: "#54ba32",
    justifyContent: "center",
    height: 64,
    width: 64,
    margin: 16,
    alignItems: "center",
    borderRadius: 9999,
    position: "absolute",
    bottom: 0,
    right: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  addMemoText: {
    fontSize: 32,
    lineHeight: 40,
    color: "#FFFFFF",
  }
});
