import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

const FloatingButton = () => {
  return (
    <Pressable
      onPress={() => router.push(`/(routes)/note/new`)}
      className="bg-primary rounded-full size-14 flex items-center justify-center absolute bottom-28 left-48"
    >
      <FontAwesome5 name="plus" color={"#fff"} size={20} />
    </Pressable>
  );
};

export default FloatingButton;
