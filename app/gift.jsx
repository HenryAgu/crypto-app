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
            <View>
              <TextInput
                className="border border-gray-300 rounded-md p-3 text-base"
                placeholder="Type here..."
                value={text}
                onChangeText={setText}
              />
              <Pressable>Copy Code</Pressable>
            </View>
          </View>
          <View>
            <Text>Terms and Conditions Applied</Text>
            <Pressable>Invite friends</Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
