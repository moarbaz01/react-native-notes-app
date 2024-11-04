import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Icon from "react-native-vector-icons/AntDesign";

export default function Note({ title, desc, index, navigation }) {
  const handleNavigation = useCallback(() => {
    navigation.navigate("Note", { index });
  }, [index, navigation]);

  const handleEdit = useCallback(() => Alert.alert("Note Implemented yet"), []);

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      activeOpacity={0.8}
      style={styles.container}
    >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc} numberOfLines={2}>
        {desc}
      </Text>
      <Icon onPress={handleEdit} style={styles.edit} name="edit" size={20} />
    </TouchableOpacity>
  );
}

Note.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  navigation: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 16,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    minHeight: 150,
    width: 180,
    position: "relative",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  desc: {
    fontSize: 16,
    marginTop: 8,
  },
  edit: {
    position: "absolute",
    bottom: 12,
    right: 12,
  },
});
