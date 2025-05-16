import { observer } from "mobx-react";
import * as React from "react";
import { Pressable, Text, View } from "react-native";

import { Filters, catsStore } from "@/stores";
import styles from "./styles";

const Filter: React.FC = () => {
  const { selectedFilter } = catsStore;

  const onPress = (index: Filters) => {
    catsStore.setSelectedFilter(index);
  };

  console.log(5555, "selectedFilter", selectedFilter);

  return (
    <View style={styles.filterContainer}>
      {Object.values(Filters).map((filter, index) => {
        return (
          <Pressable
            style={{
              ...styles.filterItem,
              backgroundColor: selectedFilter === filter ? "green" : "grey",
            }}
            key={`Filter_item_${index}_${filter}`}
            onPress={onPress.bind(null, filter)}
          >
            <Text>{filter}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default observer(Filter);
