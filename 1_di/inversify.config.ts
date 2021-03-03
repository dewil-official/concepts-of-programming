import { Container, ContainerModule } from 'inversify'
import { Model, View, Controller, Config } from './main'

import * as prompt from 'prompt-sync'

var container = new Container()

container.bind<Model>(Model).to(Model)
container.bind<Controller>(Controller).to(Controller)
container.bind<Config>(Config).to(Config)

const thirdPartyDependencies = new ContainerModule((bind) => {
  bind('prompt-sync').toDynamicValue(() => prompt())
})

container.load(thirdPartyDependencies)

export class ViewContainer {
  public container: Container

  constructor(personName: string) {
    this.container = this.injectView(personName)
  }

  injectView(personName: string): Container {
    let container = new Container()

    container.bind<View>(View).toDynamicValue(() => new View(personName))

    return container
  }
}

export default container
