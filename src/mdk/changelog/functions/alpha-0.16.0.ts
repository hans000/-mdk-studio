import * as mdk from 'mdkjs'

export const alpha16 = mdk.createFile({
    filename: 'alpha16',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('createPack中移除了packs选项')
        ctx.addComment('createPack中添加了modules选项')
        ctx.addComment('添加了useFile hooks')
        ctx.addComment('增强File类中的description字段，可以定义函数')
        ctx.addComment('增强Recipe类中的description字段，可以定义函数')
        ctx.addComment('修复Text调用修改原型的问题')
    }
})