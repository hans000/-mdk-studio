import mdk from 'mdkjs'

export const alpha15 = mdk.createFile({
    filename: 'alpha15',
    description: '0.15.0-alpha更新说明',
    tag: 'load',
    render(ctx) {
        ctx.addComment('优化了接口定义和导出')
        ctx.addComment('重新设计JText api')

        const tplText = mdk.Text.create({
            color: 'yellow',
            bold: true,
            italic: true
        })

        ctx.commands.tellraw(mdk.selector(), mdk.jtext([
            mdk.Text.yellow.bold.text('hello'),
            mdk.Text.green.bold.text(' world\n'),
            mdk.Text.clickEvent(mdk.ClickEvent.runCommand('say 1')).text('click'),
            mdk.Text.hoverEvent(mdk.HoverEvent.showText('wd')).text('click'),

            tplText.text('foo '),
            tplText.white.text('bar '),
        ]))
    }
})