import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import BoxIcon from "@/assets/images/box.svg";
import ScannerIcon from "@/assets/images/scanner.svg";

export default function HomeScreen() {
  return (
    <ScrollView className="bg-white">
      <SafeAreaView>
        <View className="px-5 py-12">
          <View className="flex-row justify-between items-center">
            <View className="flex-col gap-y-2">
              <Text className="text-xl font-normal text-[#1D1B32]">
                Hello <Text className="font-semibold">Zubby</Text>
              </Text>
              <Text className="text-[#1D1B32] text-[13px] font-light">
                Hope you’re having a great day?
              </Text>
            </View>
            <View className="flex-row gap-x-[15px]">
              <BoxIcon width={40} height={40} />
              <ScannerIcon width={40} height={40} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
