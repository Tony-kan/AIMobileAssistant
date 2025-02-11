import { View, Text, Pressable } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { formatTimestamp } from "@/lib/Date_Time";

interface TodoCardProps {
  item: {
    id: string;
    todo: string;
    createdAt: any;
    alertAt: any;
  };
}
const TodoCard = ({
  item: { id, todo, createdAt, alertAt },
}: TodoCardProps) => {
  return (
    <Pressable className="flex justify-center gap-2 mt-3 rounded p-4 bg-primary">
      <View className="flex-row items-center gap-2">
        <FontAwesome5 name="circle" size="14" />
        <Text className="font-extrabold">{todo}</Text>
      </View>
      <View className="flex-row items-center gap-2 my-2 mx-6">
        <FontAwesome5 name="clock" size="12" />
        <Text className="font-normal text-sm"> {formatTimestamp(alertAt)}</Text>
      </View>
    </Pressable>
  );
};

export default TodoCard;
