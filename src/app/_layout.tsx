import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import React from 'react'
import { Uniwind, useUniwind } from 'uniwind'

import { AnimatedSplashOverlay } from '@/components/animated-icon'
import AppTabs from '@/components/app-tabs'
import { SafeAreaListener } from 'react-native-safe-area-context'

export default function TabLayout() {
  const { theme } = useUniwind()
  return (
    <ThemeProvider value={theme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <SafeAreaListener
        onChange={({ insets }) => {
          Uniwind.updateInsets(insets)
        }}
      >
        <AppTabs />
      </SafeAreaListener>
    </ThemeProvider>
  )
}
