import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";

const onBoarding = () => {
  return (
    <SafeAreaView className="bg-white h-full flex justify-between">
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex items-center justify-center gap-4 mt-20">
        <Text className="font-extrabold text-3xl capitalize">Tonai</Text>
        <Text className="font-medium text-sm">
          The Future is here,powered by ai
        </Text>
      </View>
      <View className="flex items-center justify-center">
        <Image
          className="size-72"
          source={icons.tonai_icon}
          resizeMode="contain"
        />
      </View>
      <View className="flex items-center px-8 mb-20">
        <Pressable
          className="flex items-center justify-center bg-teal-500 w-full h-14  rounded-lg"
          onPress={() => router.push("/(tabs)")}
        >
          <Text className="font-semibold text-2xl text-white">Get Started</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default onBoarding;
