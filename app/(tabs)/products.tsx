import { FlatList, Text, View } from "react-native";
import "../../global.css";

const DATA = [
  { id: "1", title: "ZYN Mint" },
  { id: "2", title: "ZYN Berry" },
  { id: "3", title: "ZYN Citrus" },
  { id: "4", title: "ZYN Coffee" },
  { id: "5", title: "ZYN Mango" },
  { id: "6", title: "ZYN Vanilla" },
  { id: "7", title: "VELO Mint" },
  { id: "8", title: "VELO Berry" },
  { id: "9", title: "VELO Citrus" },
  { id: "10", title: "VELO Coffee" },
  { id: "11", title: "VELO Mango" },
  { id: "12", title: "VELO Vanilla" },
  { id: "13", title: "Skruf Fresh" },
  { id: "14", title: "Skruf Mint" },
  { id: "15", title: "Skruf Berry" },
  { id: "16", title: "Skruf Citrus" },
  { id: "17", title: "Skruf Coffee" },
  { id: "18", title: "Skruf Mango" },
  { id: "19", title: "Skruf Vanilla" },
  { id: "20", title: "Skruf Coffee" },
];

export default function Index() {
  return (
    <View className="flex-1 bg-zinc-800 pt-16">
      <FlatList
        key={"products-list"}
        data={DATA}
        renderItem={({ item }) => (
          <View className="p-10 border border-zinc-900 w-1/2">
            <Text className="text-lg text-white font-bold text-center">
              {item.title}
            </Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
}
