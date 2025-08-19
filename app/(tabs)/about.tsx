import { Text, View } from "react-native";
import "../../global.css";

export default function About() {
  return (
    <View className="flex-1 bg-zinc-800">
      <View className="flex-1 items-center justify-center">
        <Text className="text-yellow-500">NicTrack, created by dawc17</Text>
      </View>
    </View>
  );
}
