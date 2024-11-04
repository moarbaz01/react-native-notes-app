import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useMemo } from "react";
import PropTypes from "prop-types";
import { NotesContext } from "../context/NotesContext";

const Note = ({ route, navigation }) => {
  const {index} = route.params
  const { notes } = useContext(NotesContext);

  const { title, desc } = useMemo(() => {
    if (notes[index]) {
      return notes[index];
    } else {
      return { title: "Note not found", desc: "" };
    }
  }, [notes, index]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
};

Note.propTypes = {
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  desc: {
    fontSize: 18,
  },
});

export default Note;
