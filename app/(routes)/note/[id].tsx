import { View, Text, Pressable } from "react-native";
import React from "react";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";

const NoteDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="p-4">
      <Stack.Screen
        options={{
          headerLeft: () => (
            <Pressable
              onPress={() => router.back()}
              className="size-10 flex items-center justify-center"
            >
              <FontAwesome5 name="arrow-left" size={20} />
            </Pressable>
          ),
          title: "Notes",
          headerTitleAlign: "center",
        }}
      />
      <Text>NoteDetails</Text>
      <Text>note id : {id}</Text>
    </View>
  );
};

export default NoteDetails;
