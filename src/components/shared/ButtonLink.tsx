'use client'

import { Button } from '@nextui-org/react'
import Link, { LinkProps } from 'next/link'

// ** Types
type Props = {
  linkProps: LinkProps
  buttonProps?: React.ComponentProps<typeof Button>
  children: React.ReactNode
}

const ButtonLink = ({ linkProps, buttonProps, children }: Props) => (
  <Link {...linkProps}>
    <Button {...{ ...(buttonProps || {}) }}>{children}</Button>
  </Link>
)

export default ButtonLink
