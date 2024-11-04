import React, { useContext, useRef, useState } from "react";
import {
  Text,
  Modal,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { NotesContext } from "../../context/NotesContext";

export default function CreateNoteModal({ showModal, setShowModal }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const { handleCreateNote } = useContext(NotesContext);
  const modalRef = useRef(null);

  const handleSave = () => {
    if (!title || !desc) {
      Alert.alert("Please enter a title and description");
      return;
    }
    handleCreateNote({ title, desc });
    setTitle("");
    setDesc("");
    setShowModal(false);
  };

  const handleModalPress = (event) => {
    if (modalRef.current && event.target === modalRef.current) {
      setShowModal(false);
     
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={showModal}
      onRequestClose={() => setShowModal(false)} // Android back button handling
    >
      <TouchableWithoutFeedback onPress={handleModalPress}>
        <View ref={modalRef} style={styles.container}>
          <View style={styles.contentContainer}>
            <Text>Title</Text>
            <TextInput
              onChangeText={(text) => setTitle(text)}
              value={title}
              style={styles.titleInput}
              placeholder="Enter your title"
            />

            <Text>Note</Text>
            <TextInput
              onChangeText={(text) => setDesc(text)}
              value={desc}
              placeholder="Enter your note"
              style={styles.noteInput}
              numberOfLines={10}
              multiline={true}
            />

            <TouchableOpacity onPress={handleSave} style={styles.button}>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    width: 300,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
    shadowColor: "#000",
  },
  titleInput: {
    fontSize: 16,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
    marginVertical: 10,
  },
  noteInput: {
    fontSize: 16,
    marginTop: 8,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "gray",
    minHeight: 200,
    textAlignVertical: "top",
  },
  button: {
    alignSelf: "flex-end",
    backgroundColor: "orange",
    padding: 10,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
