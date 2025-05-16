import { StyleSheet } from "react-native";

import { IMAGE_SIZE } from "./constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  catCardContainer: {
    padding: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    backgroundColor: "rgb(210, 210, 210)",
    borderRadius: 8,
  },
  catCardImageContainer: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    overflow: "hidden",
    borderRadius: 8,
  },
  catCardDescription: {
    flex: 1,
    gap: 2,
  },
  listContentContainerStyle: {
    gap: 8,
    padding: 12,
    paddingBottom: 80,
  },
  catMoreInfoContainer: {
    minWidth: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(215, 240, 210)",
    padding: 4,
    borderRadius: 8,
  },
  linkText: {
    color: "blue",
  },
});

export default styles;
