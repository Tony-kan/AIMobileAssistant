import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";

interface SearchInputProps {}

const SearchInput = ({ placeholder, query }: SearchInputProps) => {
  const [focus, setFocus] = useState(false);
  return (
    <View className="flex items-center justify-center p-4 mx-2">
      <TextInput
        className={`flex items-center justify-center text-xl placeholder:font-bold  w-full rounded p-4 ${
          focus ? "border-2 border-primary" : "border-none"
        }`}
        placeholder={placeholder}
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
      />
    </View>
  );
};

export default SearchInput;
