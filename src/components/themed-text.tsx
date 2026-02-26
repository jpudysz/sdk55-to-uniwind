import { Text, type TextProps } from 'react-native'
import { tv } from 'tailwind-variants'

const themedText = tv({
  base: 'text-text',
  variants: {
    type: {
      default: 'text-base leading-6 font-medium',
      title: 'text-5xl leading-[52px] font-semibold',
      small: 'text-sm leading-5 font-medium',
      smallBold: 'text-sm leading-5 font-bold',
      subtitle: 'text-[32px] leading-[44px] font-semibold',
      link: 'text-sm leading-[30px]',
      linkPrimary: 'text-sm leading-[30px] text-[#3c87f7]',
      code: 'font-mono font-medium android:font-bold text-xs',
    },
    themeColor: {
      text: 'text-text',
      textSecondary: 'text-textSecondary',
      background: 'text-background',
      backgroundElement: 'text-backgroundElement',
      backgroundSelected: 'text-backgroundSelected',
    },
  },
  defaultVariants: {
    type: 'default',
  },
})

export type ThemedTextProps = TextProps & {
  type?: keyof typeof themedText.variants.type
  themeColor?: keyof typeof themedText.variants.themeColor
}

export function ThemedText({ className, type, themeColor, ...rest }: ThemedTextProps) {
  return <Text className={themedText({ type, themeColor, className })} {...rest} />
}
