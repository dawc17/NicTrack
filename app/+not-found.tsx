import { Link, Stack } from "expo-router";
import { Text, View } from "react-native";
import "../global.css";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500">This screen does not exist.</Text>
        <Link href="/">
          <Text className="text-blue-500">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
