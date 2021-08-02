import mdk from 'mdkjs'

export const alpha1 = mdk.createFile({
    filename: 'alpha1',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('调整createPack返回结构')
        ctx.addComment('添加多pack支持，用于输出多个数据包')
    }
})