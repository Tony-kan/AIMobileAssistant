import { View, Text, Image } from "react-native";
import React from "react";

interface AIModelCardProps {
  id: string;
  name: string;
  description: string;
  icon: any;
  bg_color: string;
}

const AIModelsCard = ({
  data: { id, name, description, icon, bg_color },
}: {
  data: AIModelCardProps;
}) => {
  return (
    <View className={`flex gap-2 rounded p-4 bg-${bg_color}`}>
      <View className="flex flex-row gap-4 items-center">
        <Image source={icon} className="size-8" resizeMode="contain" />
        <Text className="font-bold text-xl">{name}</Text>
      </View>
      <View>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default AIModelsCard;
