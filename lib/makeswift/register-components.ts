import { Style } from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'
import { HelloWorld } from '../../components/hello-world'

// Register your components here!

ReactRuntime.registerComponent(HelloWorld, {
  type: 'hello-world',
  label: 'Hello, world!',
  props: {
    className: Style({ properties: Style.All }),
  },
})
