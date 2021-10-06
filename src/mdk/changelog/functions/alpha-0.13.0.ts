import * as mdk from 'mdkjs'

export const alpha13 = new mdk.File({
    filename: 'alpha13',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load', // 如果此文件被加载会自动加入tags/load文件下
    render(ctx) {
        ctx.addComment('优化了接口定义，分包')
        ctx.addComment('添加插件系统，第三方可以自由开发插件')
        ctx.addComment('分离nbt包，可以通过npm i mdk-nbt引入')
    }
})