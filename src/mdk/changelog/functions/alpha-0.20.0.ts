import * as mdk from 'mdkjs'

export const alpha20 = new mdk.File({
    filename: 'alpha20',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('修复了pack file绑定上下文错误的问题')
        ctx.addComment('增强scope，以`_`开头的名称会被忽略')
        ctx.addComment('增强execute 相关的api')

        const commands = mdk.useCommand()

        commands.objective('abc')
        commands.objective('_abc')
        commands.execute.as().run(commands.say('hello'))
    }
})