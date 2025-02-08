import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Redirect } from "expo-router";

const index = () => {
  const onboarded = true;

  if (onboarded) return <Redirect href="/(tabs)" />;

  // return (
  //   <SafeAreaView>
  //     <Text className="font-bold text-3xl text-red-500">index</Text>
  //   </SafeAreaView>
  // );
  return <Redirect href="/onboarding" />;
};

export default index;
