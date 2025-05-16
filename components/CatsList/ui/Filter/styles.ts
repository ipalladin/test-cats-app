import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    backgroundColor: "rgb(210, 210, 210)",
    marginTop: 12,
    borderRadius: 8,
    gap: 8,
  },
  filterItem: {
    flex: 1,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    padding: 8,
  },
});

export default styles;
