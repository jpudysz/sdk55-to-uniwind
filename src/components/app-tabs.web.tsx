import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui'
import { SymbolView } from 'expo-symbols'
import React from 'react'
import { Pressable, View } from 'react-native'
import { withUniwind } from 'uniwind'

import { ExternalLink } from './external-link'
import { ThemedText } from './themed-text'
import { ThemedView } from './themed-view'

const StyledSymbolView = withUniwind(SymbolView)

export default function AppTabs() {
  return (
    <Tabs>
      <TabSlot style={{ height: '100%' }} />
      <TabList asChild>
        <CustomTabList>
          <TabTrigger name="home" href="/" asChild>
            <TabButton>Home</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Explore</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  )
}

export function TabButton({ children, isFocused, ...props }: TabTriggerSlotProps) {
  return (
    <Pressable {...props} className="active:opacity-70">
      <ThemedView
        type={isFocused ? 'backgroundSelected' : 'backgroundElement'}
        className="py-1 px-4 rounded-2xl">
        <ThemedText type="small" themeColor={isFocused ? 'text' : 'textSecondary'}>
          {children}
        </ThemedText>
      </ThemedView>
    </Pressable>
  )
}

export function CustomTabList(props: TabListProps) {
  return (
    <View {...props} className="absolute w-full p-4 justify-center items-center flex-row">
      <ThemedView type="backgroundElement" className="py-2 px-8 rounded-full flex-row items-center grow gap-2 max-w-[800px]">
        <ThemedText type="smallBold" className="mr-auto">
          Expo Starter
        </ThemedText>

        {props.children}

        <ExternalLink href="https://docs.expo.dev" asChild>
          <Pressable className="flex-row justify-center items-center gap-1 ml-4">
            <ThemedText type="link">Doc</ThemedText>
            <StyledSymbolView
              tintColorClassName="accent-text"
              name={{ ios: 'arrow.up.right.square', web: 'link' }}
              size={12}
            />
          </Pressable>
        </ExternalLink>
      </ThemedView>
    </View>
  )
}
