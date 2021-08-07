import * as mdk from 'mdkjs'

export const alpha15 = mdk.createFile({
    filename: 'alpha15',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('优化了接口定义和导出')
        ctx.addComment('重新设计JText api')

        const tplText = mdk.Text.create({
            color: 'yellow',
            bold: true,
            italic: true
        })

        const command = mdk.useCommand()
        command.tellraw(mdk.jtext([
            mdk.Text.yellow.bold.text('hello'),
            mdk.Text.green.bold.text(' world\n'),
            mdk.Text.clickEvent(mdk.ClickEvent.runCommand('say 1')).text('click'),
            mdk.Text.hoverEvent(mdk.HoverEvent.showText('wd')).text('click'),

            tplText.text('foo \n'),
            tplText.white.text('timer:'),
            tplText.score('timer'),
            tplText.white.text('selector'),
            tplText.selector('timer'),
        ]))
    }
})