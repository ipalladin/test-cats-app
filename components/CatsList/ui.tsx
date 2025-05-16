import { observer } from "mobx-react";
import * as React from "react";
import { ActivityIndicator, FlatList, Image, Text, View } from "react-native";

import { catsStore } from "@/stores";
import { Link } from "expo-router";
import styles from "./styles";

import type { Cat } from "@/stores";
import type { ListRenderItemInfo } from "react-native";
import { Filter } from "./ui/Filter";

const CatsList: React.FC = () => {
  const { list, loading } = catsStore;

  React.useEffect(() => {
    catsStore.getCatsList();
  }, []);

  const setSelectedCat = (cat: Cat) => {
    catsStore.setSelectedCat(cat);
  };

  const renderItem = React.useCallback(({ item }: ListRenderItemInfo<Cat>) => {
    return (
      <View style={styles.catCardContainer}>
        <View style={styles.catCardImageContainer}>
          <Image src={item.url} resizeMode="cover" style={{ flex: 1 }} />
        </View>
        <View style={styles.catCardDescription}>
          <Text>{item.breeds[0].name}</Text>
          <Text>{`Temperament: ${item.breeds[0].temperament}`}</Text>
          <Text>{`Height: ${item.height}`}</Text>
        </View>

        <Link
          href={"/cat"}
          suppressHighlighting={true}
          onPress={setSelectedCat.bind(null, item)}
          style={styles.catMoreInfoContainer}
        >
          <Text style={styles.linkText}>Cat info!</Text>
        </Link>
      </View>
    );
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.listContainer}>
      <Filter />
      <FlatList<Cat>
        key={`${list}`}
        data={list}
        keyExtractor={(item) => `${item.id}_${item.url}`}
        renderItem={renderItem}
        contentContainerStyle={styles.listContentContainerStyle}
      />
    </View>
  );
};

export default observer(CatsList);
