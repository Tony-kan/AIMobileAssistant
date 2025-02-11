import { View, Text, Pressable } from "react-native";
import React from "react";
import { formatTimestamp } from "@/lib/Date_Time";
import { FontAwesome5 } from "@expo/vector-icons";
import { router } from "expo-router";

interface NoteCardProps {
  item: {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: any;
  };
}

const NoteCard = ({
  item: { id, title, content, category, createdAt },
}: NoteCardProps) => {
  return (
    <Pressable
      onPress={() => router.push(`/(routes)/note/${id}`)}
      className="flex justify-center mx-2 bg-gray-300  gap-4 rounded p-4 mt-2"
    >
      <View>
        <Text className="font-extrabold text-xl">{title}</Text>
      </View>
      <View>
        <Text>{formatTimestamp(createdAt)}</Text>
      </View>
      <View className="flex-row gap-2">
        <FontAwesome5 name="folder" size={16} />
        <Text className="font-semibold">{category}</Text>
      </View>
    </Pressable>
  );
};

export default NoteCard;
