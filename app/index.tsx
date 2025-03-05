import { SafeAreaView, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View className="px-5 py-12">
        <View>
          <View className="flex-col gap-y-2">
            <Text className="text-xl font-normal text-[#1D1B32]">Hello <Text className="font-semibold">Zubby</Text></Text>
            <Text className="text-[#1D1B32] text-[13px] font-light">Hope you’re having a great day?</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
