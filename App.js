import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalInput from "./components/GoalInput";
import ListItem from "./components/ListItem";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addGoal = (goal) => {
    setGoalList([...goalList, { id: Math.random().toString(), value: goal }]);
    setIsOpen(false)
  };

  const deleteGoal = (id) => {
    setGoalList((currentGoal) => currentGoal.filter((goal) => goal.id !== id));
  };
  
  const cancelAddGoal = () => {
    setIsOpen(false)
  }

  return (
    <View style={styles.screen}>
      <Button title="Add new goal" onPress={() => setIsOpen(true)} />
      <GoalInput visible={isOpen} addGoal={addGoal} cancelAddGoal={cancelAddGoal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalList}
        renderItem={(itemData) => (
          <ListItem
            id={itemData.item.id}
            onDelete={deleteGoal}
            itemData={itemData}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
