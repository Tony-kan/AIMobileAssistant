import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  ScrollView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { ai_models } from "@/lib";
import AIModelsCard from "@/components/AIModelsCard";
import { icons, images } from "@/constants";
import { Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import ChatSection from "@/components/ChatSection";
import { FontAwesome5 } from "@expo/vector-icons";
import { dummyMessages } from "@/lib/DummyData";

//Todo : refresh pull should refetch data

const Home = () => {
  const [messages, setmessages] = useState(dummyMessages);
  // const [messages, setmessages] = useState([]);
  const [recording, setrecording] = useState(false);

  const [refreshing, setRefreshing] = useState(false);

  const wait = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleRefresh = async () => {
    setRefreshing(true);
    await wait(1000);
    setRefreshing(false);
  };
  return (
    <SafeAreaView className="bg-white flex-1 px-4">
      <Stack.Screen options={{ headerShown: false }} />
      {messages?.length > 0 ? (
        <View>
          <View className="flex items-center justify-center">
            <Image source={icons.tonai_icon} className="size-36" />
          </View>
          <View className="flex-row items-center justify-between px-4 gap-4 my-4">
            <Text className="font-extrabold text-3xl my-2">Assistant(TA)</Text>
            {/* recording, clear and stop btns   */}
            <View className="flex  justify-center items-center">
              {recording ? (
                <View className="flex items-center justify-center bg-red-500 rounded-full size-12">
                  <Pressable onPress={() => setrecording(false)}>
                    <FontAwesome5
                      name="microphone-alt"
                      color={"#FFF"}
                      size={24}
                    />
                  </Pressable>
                </View>
              ) : (
                // <Pressable onPress={() => setrecording(false)}>
                //   <FontAwesome5 name="microphone-alt" color={"#FF0000"} size={32} />
                // </Pressable>
                <View className="flex items-center justify-center rounded-full size-12">
                  <Pressable onPress={() => setrecording(true)}>
                    <FontAwesome5
                      name="microphone-alt"
                      color={"#14b8a6"}
                      size={24}
                    />
                  </Pressable>
                </View>
              )}
            </View>
          </View>
          {/* chat section  */}
          <ChatSection messages={messages} />
        </View>
      ) : (
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
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={["#14b8a6"]} // teal-500 color
              tintColor="#10B981" // iOS spinner color
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
