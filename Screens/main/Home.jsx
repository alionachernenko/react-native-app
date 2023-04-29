import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PostsScreen } from "./PostsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { CreatePostScreen } from "./CreatePostScreen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import CommentsScreen from "../nested/CommentsScreen";
import Map from "../nested/Map";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarLabel: () => null,
        }}
      >
        <Tabs.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: "white",
                  paddingHorizontal: 23,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                <Ionicons name="ios-grid-outline" size={24} color="#212121" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Create"
          component={CreatePostScreen}
          options={{
            tabBarStyle: { display: "none" },
            tabBarIcon: () => (
              <View
                style={{
                  backgroundColor: "#FF6C00",
                  paddingHorizontal: 23,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                <AntDesign name="plus" size={24} color="white" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: () => (
              <View
                style={{
                  paddingHorizontal: 23,
                  paddingVertical: 8,
                  borderRadius: 20,
                }}
              >
                <AntDesign name="user" size={24} color="#212121" />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="Comments"
          component={CommentsScreen}
          options={{
            tabBarItemStyle: {
              display: "none",
            },
          }}
        />
        <Tabs.Screen
          name="Map"
          component={Map}
          options={{
            tabBarItemStyle: {
              display: "none",
            },
          }}
        />
      </Tabs.Navigator>
    </>
  );
};
