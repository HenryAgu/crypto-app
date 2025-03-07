import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, ScrollView, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native";
import { View } from "react-native";
import LeftArrowIcon from "@/assets/images/LeftArrow.svg";
import Avatars from "@/assets/images/Avatars.png";

export default function GiftScreen() {
  const [text, setText] = useState("");
  return (
    <ScrollView className="bg-white h-screen">
      <SafeAreaView>
        <View className="px-5 py-12 flex-col justify-between">
          <Link href="/" asChild>
            <LeftArrowIcon />
          </Link>
          <View className="flex-col items-center gap-y-3 mt-14">
            <Image source={Avatars} className="w-[223px] h-[223px]" />
            <View className="flex-col gap-y-2">
              <Text className="text-[#212529] font-medium text-[39px]">
                Refer and Earn{" "}
              </Text>
              <Text className="text-[#6C757D] text-sm font-normal">
                You earn a bonus when you refer a friend
              </Text>
            </View>
          </View>
          <View className="mt-20 flex-col gap-y-1">
            <Text classNam="text-sm font-normal text-[#343A40]">
              Referal ID
            </Text>
            <View className="border border-[#DFE2E4] rounded-[4px] p-2 flex-row items-center gap-x-2">
              <TextInput
                className="text-sm text-[#6C757D] w-full h-full outline-white"
                placeholder="Type here..."
                value={text}
                onChangeText={setText}
              />
              <Pressable className="w-fit bg-[#0063F5] text-center p-2 text-xs rounded-[4px] text-white">Copy Code</Pressable>
            </View>
          </View>
          <View className="mt-20 flex-col gap-y-10 items-center text-center">
            <Text className="text-xs text-[#1D1B32] font-normal">Terms and Conditions Applied</Text>
            <Pressable className="bg-[#0063F5] w-full text-[#F8F9FA] font-medium rounded-[10px] py-5">Invite friends</Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
