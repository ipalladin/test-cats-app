import AsyncStorage from "@react-native-async-storage/async-storage";

export const getLsItem = async (key: string) => {
  const data = await AsyncStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return data;
};

export const setLsItem = async (key: string, value: unknown) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log("[setLsItem error]", error);
  }
};
