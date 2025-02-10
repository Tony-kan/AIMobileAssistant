import { View, Text, ScrollView, RefreshControl, Image } from "react-native";
import React, { useState } from "react";

interface chatSectionProps {
  role: string;
  content: string;
}

const ChatSection = ({ messages }: { messages: chatSectionProps[] }) => {
  const [refreshing, setRefreshing] = useState(false);

  const wait = (ms: any) => new Promise((resolve) => setTimeout(resolve, ms));
  const handleRefresh = async () => {
    setRefreshing(true);
    await wait(1000);
    setRefreshing(false);
  };
  return (
    <ScrollView
      contentContainerClassName="bg-neutral-200 rounded p-4 "
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={["#14b8a6"]} // teal-500 color
          tintColor="#10B981" // iOS spinner color
        />
      }
      //   bounces={false}
      showsVerticalScrollIndicator={false}
    >
      {messages.map((message, index) => (
        <View key={index}>
          {message.role === "assistant" ? (
            <View>
              {message.content.includes("http") ||
              message.content.includes("https") ? (
                // render an image
                <View className="flex-row justify-start items-center gap-2">
                  <View className="bg-black rounded-3xl size-8 flex justify-center items-center">
                    <Text className="text-white font-extrabold">TA</Text>
                  </View>
                  <View className="p-2 flex rounded-2xl bg-teal-200 rounded-tl-none">
                    <Image
                      source={{ uri: message.content }}
                      className="rounded-2xl size-60"
                      resizeMode="contain"
                    />
                  </View>
                </View>
              ) : (
                // render a text response
                <View className="flex-row justify-start items-center gap-2">
                  <View className="bg-black rounded-3xl size-8 flex justify-center items-center">
                    <Text className="text-white font-extrabold">TA</Text>
                  </View>
                  <View className="bg-teal-200 rounded-xl p-4 rounded-tl-none flex-row">
                    <Text> {message.content}</Text>
                  </View>
                </View>
              )}
            </View>
          ) : (
            <View className="flex-row justify-end items-center gap-2">
              <View className="bg-white rounded-xl p-4 rounded-tr-none my-4">
                <Text> {message.content}</Text>
              </View>
              <View className="bg-black rounded-3xl size-8 flex  justify-center items-center">
                <Text className="text-white font-extrabold">U</Text>
              </View>
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

export default ChatSection;
