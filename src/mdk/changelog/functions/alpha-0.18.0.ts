import * as mdk from 'mdkjs'
import { alpha16 } from './alpha-0.16.0'

export const alpha18 = new mdk.File({
    filename: 'alpha18',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('添加commands导出')
        ctx.addComment('完善text Color属性')
        ctx.addComment('修改ObjectiveItem->Objective')
        ctx.addComment('删除多于的导出')
        ctx.add(alpha16)
        ctx.add(mdk.commands.say('1'))
        const commands = mdk.useCommand()
        const timer = commands.objective('timer1')
        const system = mdk.selector('#system')
        system.select(timer.name).max(timer)
    }
})