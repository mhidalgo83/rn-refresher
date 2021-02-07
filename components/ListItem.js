import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";



const ListItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={.8} onPress={() => props.onDelete(props.id)} >
      <View style={styles.listItem}>
        <Text>{props.itemData.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderColor: "black",
    backgroundColor: "#ccc",
    borderWidth: 1,
    marginVertical: 10,
  },
});

export default ListItem;
