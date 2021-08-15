import * as mdk from 'mdkjs'
import init from './init'

export default mdk.createFile({
    filename: 'main',
    description: '这里用于mdk主要特性',
    tag: 'load',
    render(ctx) {
        const { timerScb, length } = init.getData()

        const command = mdk.useCommand()

        command.scoreboard(timerScb).add(mdk.selector(), 1)

        command.say('hello mc')
        command.tellraw(mdk.jtext([
                { text: 'hello', color: 'gold', },
                { text: ' world', color: 'blue', }
            ])
        )
        command.tellraw(mdk.jtext([
                { text: 'hello', color: 'red', bold: true, underlined: true },
                { text: ' world', color: 'blue', strikethrough: true },
            ])
        )
        for (let i = 0; i < length; i++) {
            command.say(`foo${i + 1}`)            
        }
    }
})