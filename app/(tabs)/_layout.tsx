import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs, Redirect } from 'expo-router'
import { icons } from '@/constants'
type TabIconProps = {
    icon: any;
    color: string;
    name: string;
    focused: boolean;
  }
const TabIcon = ({icon, color, name, focused} : TabIconProps) => {
    return (
        <View className='items-center justify-center gap-2'>
            <Image 
                source={icon}
                resizeMode='contain'
                tintColor={color}
                className='w-6 h-6'
            />
            <Text className={`${focused ? 'font-bsemibold' : 'font-bregular'} text-xs`} style={{ color: color}} >
                {name}
            </Text>
        </View>
    )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs 
        screenOptions={{
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#1ED4AA',
            tabBarInactiveTintColor: '#2D3436',
            tabBarStyle: {
                backgroundColor: '#FFFFFF',
                borderTopWidth: 1,
                borderTopColor: 'rgba(0, 0, 0, 0.1)', // Light border color
                shadowColor: '#000', // Shadow color
                shadowOffset: { width: 0, height: -2 }, // Shadow at the top
                shadowOpacity: 0.1, // Adjust shadow visibility
                height:91,
                paddingTop:21

            }
            
        }}
      >
        <Tabs.Screen
            name='home'
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.home}
                        color={color}
                        name="Home"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='grades'
            options={{
                title: 'Grades',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.grades}
                        color={color}
                        name="Grades"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='attendances'
            options={{
                title: 'Attendance',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.book}
                        color={color}
                        name="Attendance"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='schedule'
            options={{
                title: 'Schedule',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.schedule}
                        color={color}
                        name="Schedule"
                        focused={focused}
                    />
                )
            }}
        />
        <Tabs.Screen
            name='messages'
            options={{
                title: 'Messages',
                headerShown: false,
                tabBarIcon: ({color, focused }) => (
                    <TabIcon
                        icon={icons.messages}
                        color={color}
                        name="Messages"
                        focused={focused}
                    />
                )
            }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout