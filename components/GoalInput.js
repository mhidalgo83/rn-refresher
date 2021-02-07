import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleInput = (text) => {
    setEnteredGoal(text);
  };

  const handleAdd = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          onChangeText={handleInput}
          placeholder="Course Goal"
          style={styles.input}
          value={enteredGoal}
        />
        <View style={styles.buttonRow}>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.cancelAddGoal} />
          </View>
          <View style={styles.button}>
            <Button onPress={handleAdd} title="Add"></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
    marginBottom: 10,
  },
  buttonRow: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
