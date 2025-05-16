import { observer } from "mobx-react";
import * as React from "react";
import { Image, Text, View } from "react-native";

import { catsStore } from "@/stores";
import { Entypo } from "@expo/vector-icons";
import Animated, { BounceInDown, SlideInDown } from "react-native-reanimated";
import { ICON_SIZE } from "./constants";
import styles from "./style";

const CatInfo: React.FC = () => {
  const { selectedCat, isFavorite } = catsStore;

  const onPress = async () => {
    if (!selectedCat) return;

    await catsStore.toggleFavorites(selectedCat?.id);
  };

  if (!selectedCat) return null;
  const { name, life_span } = selectedCat.breeds[0];

  return (
    <View style={styles.container}>
      <Animated.View
        style={styles.catImageContainer}
        entering={BounceInDown.delay(100).duration(600)}
      >
        <Image src={selectedCat.url} resizeMode="stretch" style={{ flex: 1 }} />
        <Entypo
          name={isFavorite ? "star" : "star-outlined"}
          style={{
            ...styles.starIcon,
            color: isFavorite ? "gold" : "grey",
          }}
          size={ICON_SIZE}
          onPress={onPress}
          suppressHighlighting
        />
      </Animated.View>
      <Animated.View
        entering={SlideInDown.delay(120).duration(800)}
        style={styles.textWrapper}
      >
        <Text style={styles.label}>{`Name: ${name}`}</Text>
        <Text style={styles.label}>{`Life duration: ${life_span}`}</Text>
      </Animated.View>
    </View>
  );
};

export default observer(CatInfo);
