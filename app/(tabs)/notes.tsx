import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

const Notes = () => {
  return (
    <SafeAreaView>
      <Stack.Screen options={{ title: "All notes" }} />
      <FlatList
        data={[1, 2, 3, 4]}
        renderItem={({ item }) => <Text>item</Text>}
        // keyExtractor={() => item?.toString()}
        ListHeaderComponent={
          <View>
            <View className="flex justify-center items-center">
              <Text className="font-extrabold mt-2 text-xl">All Notes</Text>
            </View>
            <View>
              <Text>Search Input</Text>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Notes;
