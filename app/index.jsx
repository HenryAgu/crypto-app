import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import BoxIcon from "@/assets/images/box.svg";
import ScannerIcon from "@/assets/images/scanner.svg";
import AvatarIcon from "@/assets/images/Avatar.svg";
import RightArrowIcon from "@/assets/images/RightArrow.svg";
import CircleRight from "@/assets/images/CircleRight.svg";
import ArrowDown from "@/assets/images/DownArrow.svg";
import CircleIcon from "@/assets/images/Circle.svg";
import CardBackground from "@/assets/images/card.png";
import ActivityIcon from "@/assets/images/Activity.svg";
import ActivityArrow from "@/assets/images/ActivityArrow.svg";

// Crypto assets as components
import BitcoinLogo from "@/assets/images/Bitcoin.svg";
import EtherumLogo from "@/assets/images/Etherum.svg";
import BandLogo from "@/assets/images/Band.svg";
import CardanoLogo from "@/assets/images/Cardano.svg";
import TronLogo from "@/assets/images/Tron.svg";
import TetherLogo from "@/assets/images/Tether.svg";
import { Link } from "expo-router";

export default function HomeScreen() {
  const assets = [
    {
      Icon: BitcoinLogo,
      title: "Bitcoin",
      accronym: "BTC",
      value: "₹2,509.75",
      trend: "+9.77%",
    },
    {
      Icon: EtherumLogo,
      title: "Ethereum",
      accronym: "ETH",
      value: "₹1,740.30",
      trend: "-2.35%",
    },
    {
      Icon:BandLogo,
      title: "Band",
      accronym: "BAND",
      value: "₹553.06",
      trend: "-22.97%",
    },
    {
      Icon: CardanoLogo,
      title: "Cardano",
      accronym: "ADA",
      value: "₹0.45",
      trend: "+1.20%",
    },
    {
      Icon: TronLogo,
      title: "Tron",
      accronym: "TRX",
      value: "₹0.08",
      trend: "+5.50%",
    },
    {
      Icon: TetherLogo,
      title: "Tether",
      accronym: "usdt",
      value: "₹73.00",
      trend: "+0.07%",
    },
  ];

  return (
    <ScrollView className="bg-white">
      <SafeAreaView>
        <View className="px-5 py-12">
          {/* Header */}
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
              <Link href="/gift" asChild>
                <Pressable>
                  <BoxIcon width={40} height={40} />
                </Pressable>
              </Link>
              <ScannerIcon width={40} height={40} />
            </View>
          </View>

          {/* Card */}
          <View className="mt-14 bg-[#232138] p-10 rounded-[30px]">
            <View className="flex-row justify-between">
              <Image source={CardBackground} className="w-[20px] h-[20px]" />
              <View className="flex-col items-center gap-y-3.5">
                <AvatarIcon width={70} height={70} />
                <Text className="text-sm font-light text-white">
                  Total Balance in USD
                </Text>
                <Text className="text-white text-[39px] font-medium">
                  $634.23
                </Text>
              </View>
              <RightArrowIcon width={40} height={40} />
            </View>
            <View className="flex-row justify-between mt-14">
              <View className="flex-col items-center gap-y-3">
                <CircleRight width={62} height={62} />
                <Text className="text-sm text-[#CCCCCC] font-normal">Send</Text>
              </View>
              <View className="flex-col items-center gap-y-3">
                <ArrowDown width={62} height={62} />
                <Text className="text-sm text-[#CCCCCC] font-normal">
                  Receive
                </Text>
              </View>
              <View className="flex-col items-center gap-y-3">
                <CircleIcon width={62} height={62} />
                <Text className="text-sm text-[#CCCCCC] font-normal">Buy</Text>
              </View>
            </View>
          </View>

          {/* Activity */}
          <View className="mt-5 bg-white shadow-custom rounded-[25px] px-5 py-8 flex-row items-center justify-between">
            <View className="flex-row items-center gap-x-10">
              <ActivityIcon width={51} height={51} />
              <Text className="text-[#1D1B32] text-lg font-normal">
                Activity
              </Text>
            </View>
            <ActivityArrow width={40} height={40} />
          </View>

          {/* Assets Section */}
          <View className="mt-14">
            <Text className="text-[25px] font-medium">Assets</Text>
            <FlatList
              data={assets}
              keyExtractor={(index) => index.toString()}
              renderItem={({ item }) => {
                const AssetIcon = item.Icon; // Assign the icon component dynamically

                return (
                  <View className="bg-white shadow-box px-4 py-6 rounded-[15px] flex-row justify-between items-center mt-5">
                    <View className="flex-row items-center gap-x-4">
                      <AssetIcon width={46} height={46} />{" "}
                      {/* Use SVG component */}
                      <View>
                        <Text className="text-lg font-normal text-[#1D1B32]">
                          {item.title}
                        </Text>
                        <Text className="font-normal uppercase text-sm">
                          {item.accronym}
                        </Text>
                      </View>
                    </View>
                    <View className="items-end">
                      <Text className="text-base text-[#6C757D] font-medium">
                        {item.value}
                      </Text>
                      <Text
                        className={`${
                          item.trend.startsWith("+")
                            ? "text-green-500"
                            : "text-red-500"
                        } text-xs font-medium`}
                      >
                        {item.trend}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
