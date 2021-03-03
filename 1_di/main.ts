import { decorate, injectable, inject } from 'inversify'
import container, { ViewContainer } from './inversify.config'
import 'reflect-metadata'

@injectable()
export class Config {
  namePrompt = "What's your name?\n> "
  repeatPrompt = 'Want to render another View? (y/n)\n> '
  noChoices = ['n', 'no', 'nope', 'nein']
}

@injectable()
export class Model {
  getMessage(personName: string): string {
    return `Hello ${personName}!`
  }
}

@injectable()
export class View {
  @inject(Model) model: Model
  personName: string

  constructor(personName: string) {
    this.personName = personName
  }

  render() {
    console.log('--- RENDERED VIEW ---')
    console.log(this.model.getMessage(this.personName))
    console.log('---------------------')
  }
}

@injectable()
export class Controller {
  view: View
  @inject(Config) config: Config
  @inject('prompt-sync') prompt: NodeRequire

  start(): void {
    while (true) {
      let name = this.prompt(this.config.namePrompt)

      // Using DI with a custom class to inject dynamic value
      let viewDI = new ViewContainer(name)
      this.view = viewDI.container.get(View)
      this.view.render()

      let choice = this.prompt(this.config.repeatPrompt)

      if (this.config.noChoices.includes(choice.toLowerCase())) {
        break
      }
    }

    console.log('---------------------')
    console.log("That's it, thanks!")
  }
}

class Logger {
  log() {
    console.log('log.')
  }
}

// Resolve Dependencies
const c = container.get<Controller>(Controller)

// RUN BOY RUN!
c.start()
