import { NativeTabs } from 'expo-router/unstable-native-tabs'
import React from 'react'
import { useColorScheme } from 'react-native'

import { Colors } from '@/constants/theme'
import { useCSSVariable } from 'uniwind'

export default function AppTabs() {
  const scheme = useColorScheme()
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme]
  const [backgroundColor, backgroundElementColor, text] = useCSSVariable([
    '--color-background',
    '--color-backgroundElement',
    '--color-text',
  ]) as [string, string, string]

  return (
    <NativeTabs
      backgroundColor={backgroundColor}
      indicatorColor={backgroundElementColor}
      labelStyle={{ selected: { color: text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  )
}
