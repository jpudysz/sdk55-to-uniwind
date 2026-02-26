import { View, type ViewProps } from 'react-native'
import { tv } from 'tailwind-variants'

const themedView = tv({
  base: 'bg-background',
  variants: {
    type: {
      background: 'bg-background',
      backgroundElement: 'bg-backgroundElement',
      backgroundSelected: 'bg-backgroundSelected',
    },
  },
})

export type ThemedViewProps = ViewProps & {
  type?: keyof typeof themedView.variants.type
}

export function ThemedView({ className, type, ...otherProps }: ThemedViewProps) {
  return <View className={themedView({ type, className })} {...otherProps} />
}
