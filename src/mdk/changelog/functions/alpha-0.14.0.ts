import mdk from 'mdkjs'

export const alpha14 = mdk.createFile({
    filename: 'alpha14',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('优化了接口定义和导出')
        ctx.addComment('添加recipe相关的类，支持recipe预览功能(暂时不支持解析tag)')
    }
})