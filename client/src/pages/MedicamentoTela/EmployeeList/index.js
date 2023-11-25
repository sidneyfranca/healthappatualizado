import { StyleSheet, FlatList, Image, View } from "react-native";
import { EmployeeListItem } from "../EmployeeListItem";

export function EmployeeList(props) {
  return (
    <FlatList
      data={props.data}
      renderItem={({ item }) => {
        return (
          <EmployeeListItem
            name={item.name}
            role={item.role}
            image={item.image}
            favorited={item.favorited ?? false}
          />
        )
      }}
      keyExtractor={(item) => item.key}
      style={styles.container}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
