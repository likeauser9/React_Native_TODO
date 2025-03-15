import { View, Text, ImageBackground, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "@/constants/icons";

// const TabIcon = ({ focused, IconFocused, IconUnfocused, title }: any) => {
//   if (focused) {
//     return (
//       // <ImageBackground>

//       // </ImageBackground>
//       <View>
//         <Image source={iconFocused} tintColor="#151312" />
//         <Text>{title}</Text>
//       </View>
//     );
//   }

//   return (
//     <View>
//       <Image
//         source={iconUnfocused} // Незаполненная иконка
//         tintColor="#A8B5DB"
//       />
//     </View>
//   );
// };

const TabIcon = ({ focused, IconFocused, IconUnfocused, title }: any) => {
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        borderColor: "red",
        borderWidth: 2,
      }}
    >
      {focused ? (
        <IconFocused width={24} height={24} fill="#151312" />
      ) : (
        <IconUnfocused width={24} height={24} fill="#A8B5DB" />
      )}
      <Text
        style={{
          color: focused ? "#151312" : "#A8B5DB",
          fontSize: 12,
          marginTop: 4,
          // maxWidth: 60,
          // textAlign: "center",
        }}
        numberOfLines={1}
        // ellipsizeMode="tail"
      >
        {title}
      </Text>
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              IconFocused={icons.HomeS}
              IconUnfocused={icons.HomeU}
              title="Home"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="list"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              IconFocused={icons.ListS}
              IconUnfocused={icons.ListU}
              title="List"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              IconFocused={icons.SettingsS}
              IconUnfocused={icons.SettingsU}
              title="Settings"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
