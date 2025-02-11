import { View, Text, Image } from "react-native";
import React from "react";

interface NotFoundProps {
  message: string;
}

const NotFound = ({ message }: NotFoundProps) => {
  return (
    <View className="flex items-center justify-center">
      <Image />
      <Text className="font-extrabold">{message}</Text>
    </View>
  );
};

export default NotFound;
