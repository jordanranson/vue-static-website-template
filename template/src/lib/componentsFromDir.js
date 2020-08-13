import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export default function componentsFromDir (requireComponent, registerComponent) {
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )

    // Register component globally
    registerComponent(componentName, componentConfig.default || componentConfig)
  })
}
