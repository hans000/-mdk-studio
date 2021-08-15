import * as mdk from 'mdkjs'
import { alpha16 } from './alpha-0.16.0'

export const alpha17 = mdk.createFile({
    filename: 'alpha17',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('使用monorepo管理仓库')
        ctx.addComment('添加useCommand，代替在context挂在Commands')
        ctx.add(alpha16)
        const commands = mdk.useCommand()
        commands.schedule.functionName(alpha16.toString(), '12', 'append')
    }
})