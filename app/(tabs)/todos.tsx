import { View, Text, Pressable, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome5 } from "@expo/vector-icons";
import SearchInput from "@/components/SearchInput";
import NotFound from "@/components/NotFound";
import { dummyTodos } from "@/lib/DummyData";
import TodoCard from "@/components/TodoCard";

const Todos = () => {
  return (
    <SafeAreaView className="p-6">
      <View className="flex-row items-center justify-between">
        <Text className="font-extrabold text-3xl">Todos</Text>
        <Pressable className="flex items-center justify-center">
          <FontAwesome5 name="ellipsis-v" size="20" />
        </Pressable>
      </View>
      <View>
        <SearchInput placeholder="Search Todos" type="todos" />
      </View>
      <FlatList
        data={dummyTodos}
        renderItem={({ item }) => <TodoCard item={item} />}
        ListEmptyComponent={<NotFound message="Todos Not Found" />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-20"
        bounces={false}
      />
    </SafeAreaView>
  );
};

export default Todos;
