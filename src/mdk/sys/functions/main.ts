import mdk from 'mdkjs'
import init from './init'

export default mdk.createFile({
    filename: 'main',
    description: '这里用于mdk主要特性',
    tag: 'load',
    render(ctx) {
        const { timerScb, length } = init.getData()

        timerScb.add(mdk.selector(), 1)

        ctx.commands.say('hello mc')
        // @ts-ignore
        ctx.commands.tellraw(
            mdk.selector(),
            mdk.jtext([
                { text: 'hello', color: 'gold', },
                { text: ' world', color: 'blue', }
            ])
        )
        // @ts-ignore
        ctx.commands.tellraw(
            mdk.selector(), mdk.jtext([
                { text: 'hello', color: 'red', bold: true, underlined: true },
                { text: ' world', color: 'blue', strikethrough: true },
            ])
        )
        for (let i = 0; i < length; i++) {
        // @ts-ignore
            ctx.commands.say(`foo${i + 1}`)            
        }
    }
})