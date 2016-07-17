import { bold, green, red, blue } from 'colors/safe'

export default function createLogger (customOptions) {
  return ({ getState }) => next => action => {
    if (!console) {
      return next(action)
    }

    const prevState = getState()
    const actionDisplay = action
    const returnValue = next(action)
    const nextState = getState()
    const time = new Date()

    const message = `action ${action.type} @ ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
    const formatOutput = output => JSON.stringify(output, null, 2)

    console.log(`
${bold(green(message))}
${bold(red('Previous state:'))} ${formatOutput(prevState)}
${bold(green('Action:'))} ${formatOutput(actionDisplay)}
${bold(blue('Next state:'))} ${formatOutput(nextState)}
    `)

    return returnValue
  }
}
