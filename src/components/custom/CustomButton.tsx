import { Button, extendVariants } from '@nextui-org/react'

export const CustomButton = extendVariants(Button, {
  variants: {
    size: {
      xxs: 'text-[10px]'
    }
  }
})
