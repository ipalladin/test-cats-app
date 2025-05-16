import { StyleSheet } from "react-native";

import { IMAGE_SIZE } from "./constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  catImageContainer: {
    width: "100%",
    minHeight: IMAGE_SIZE,
  },
  label: {
    fontSize: 20,
    fontWeight: 600,
  },
  textWrapper: {
    padding: 12,
    gap: 4,
  },
  starIcon: {
    position: "absolute",
    right: 20,
    top: 20,
  },
});

export default styles;
