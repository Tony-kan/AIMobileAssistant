import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import SearchInput from "@/components/SearchInput";
import NoteCard from "@/components/NoteCard";
import { dummyNotes } from "@/lib";
import FloatingButton from "@/components/FloatingButton";
import NotFound from "@/components/NotFound";

const Notes = () => {
  return (
    <SafeAreaView className="bg-white h-full -z-50">
      <Stack.Screen options={{ title: "All notes" }} />
      <View>
        <View className="flex justify-center items-center ">
          <Text className="font-extrabold mt-2 text-xl ">All Notes</Text>
        </View>
        <View>
          <SearchInput placeholder="Search Notes" type="notes" />
        </View>
      </View>
      <FlatList
        data={dummyNotes}
        // data={[]}
        renderItem={({ item }) => <NoteCard item={item} />}
        ListEmptyComponent={<NotFound message="Notes Not Found" />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerClassName="pb-20"
      />
      <FloatingButton />
    </SafeAreaView>
  );
};

export default Notes;
