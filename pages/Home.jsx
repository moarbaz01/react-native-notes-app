import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/Home/Navbar";
import Note from "../components/Notes/Note";
import { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import Icon from "react-native-vector-icons/AntDesign";
import CreateNoteModal from "../components/Notes/CreateNoteModal";

export default function Home({ navigation }) {
  const { notes } = useContext(NotesContext);
  const [showModal, setShowModal] = useState(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navbar />
      <ScrollView>
        <View style={styles.notesContainer}>
          {notes.map((note, index) => (
            <Note
              navigation={navigation}
              key={index}
              title={note.title}
              index={index}
              desc={note.desc}
            />
          ))}
        </View>
      </ScrollView>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => setShowModal(true)}
        style={styles.create}
      >
        <Icon name="plus" size={20} />
      </TouchableOpacity>
      <CreateNoteModal showModal={showModal} setShowModal={setShowModal} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  notesContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
    padding: 10,
  },
  create: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "orange",
    width: 60,
    height: 60,
    position: "absolute",
    right: 20,
    bottom: 40,
  },
});
