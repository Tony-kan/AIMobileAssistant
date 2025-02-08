import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { ai_models } from "@/lib/models";
import AIModelsCard from "@/components/AIModelsCard";
import { icons, images } from "@/constants";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView className="bg-white flex-1 px-6">
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        data={ai_models}
        // data={[]}
        renderItem={({ item }) => <AIModelsCard data={item} />}
        keyExtractor={(item) => item?.id}
        ListEmptyComponent={
          <View className="flex items-center gap-4 my-6">
            <Text className="font-extrabold text-3xl">Models not Found</Text>
            <Image
              source={images.not_found_image}
              className="w-full h-72 rounded-lg"
            />
          </View>
        }
        ListHeaderComponent={
          <View>
            <View className="flex items-center justify-center">
              <Image source={icons.tonai_icon} className="size-36" />
            </View>
            <View>
              <Text className="font-extrabold text-3xl my-2">Features</Text>
            </View>
          </View>
        }
        contentContainerClassName="gap-4"
      />
    </SafeAreaView>
  );
};

export default Home;
