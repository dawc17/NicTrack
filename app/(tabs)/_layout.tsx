import TabBarBackground from "@/app/components/ui/TabBackground";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarBackground: TabBarBackground,
      }}
    >
      <Tabs.Screen name="home" options={{ title: "Home" }} />
    </Tabs>
  );
}
