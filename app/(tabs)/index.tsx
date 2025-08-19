import { Text, View } from "react-native";
import * as Progress from "react-native-progress";
import "../../global.css";

export default function Home() {
  let currentNicotineUsage = 5;
  let dailyLimit = 20;
  const usage = currentNicotineUsage / dailyLimit;

  return (
    <View className="flex-1 bg-zinc-800">
      <View className="flex-1 items-center justify-center">
        <Text className="text-white pb-5">Today's usage</Text>
        <Progress.Circle
          size={240}
          progress={usage}
          color="#eb4034"
          style={{ marginTop: 20 }}
          showsText={true}
          direction="counter-clockwise"
          thickness={10}
          formatText={() => `${currentNicotineUsage} mg`}
          textStyle={{
            fontSize: 24,
            color: "#ffffff",
            fontWeight: "bold",
          }}
        />
      </View>
      <View className="flex-1 items-center justify-stretch pt-10 border">
        <Text className="text-white">Register product</Text>
      </View>
    </View>
  );
}
