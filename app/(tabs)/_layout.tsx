import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/assets/icons";

const TabIcon = ({ focused, iconFocused, iconUnfocused, title }: any) => {
  if (focused) {
    return (
      // <ImageBackground>

      // </ImageBackground>
      <View>
        <Image source={iconFocused} tintColor="#151312" />
        <Text>{title}</Text>
      </View>
    );
  }

  return (
    <View>
      <Image
        source={iconUnfocused} // Незаполненная иконка
        tintColor="#A8B5DB"
      />
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs screenOptions={{}}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          title: "List",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} iconFocused={require("")} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
};

export default _Layout;
