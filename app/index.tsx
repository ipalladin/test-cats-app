import * as React from "react";

import { CatsList } from "@/components";
import { View } from "react-native";

const RootScreen: React.FC = () => (
  <View
    style={{
      borderRadius: 8,
      overflow: "hidden",
    }}
  >
    <CatsList />
  </View>
);

export default RootScreen;
