import React from 'react'

type Props = {
  className?: string
}

export function HelloWorld({ className }: Props) {
  return <p className={className}>Hello, world!</p>
}
