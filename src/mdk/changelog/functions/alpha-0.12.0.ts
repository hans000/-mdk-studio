import mdk from 'mdkjs'

export const shaped = mdk.createFile({
    filename: 'shaped1',
    description: '有序合成，TODO：合成预览',
    type: 'recipe',
    render(ctx) {
        ctx.add({
            type: 'crafting_shaped',
            pattern: [
                '#@#',
                '@#@',
                '#@#',
            ],
            key: {
                '@': {
                    item: 'stone',
                },
                '#': {
                    item: 'grass',
                }
            },
            result: {
                item: 'crimson_stairs'
            }
        })
    }
})

export const alpha12 = mdk.createFile({
    filename: 'alpha12',
    description: '0.12.0-alpha更新说明',
    tag: 'load', // 如果此文件被加载会自动加入tags/load文件下
    render(ctx) {
        ctx.addComment('优化了接口定义，分包，修复一些bug')
        ctx.addComment('createFile函数添加description字段，用于备注文件信息')
        ctx.addComment('createFile函数添加对recipe类型文件的支持')
        ctx.addComment('添加对注释字段的高亮显示')
        ctx.addComment('添加createEntity用于生成实体，支持summon指令')

        // const creeper = mdk.createEntity({
        //     id: 'creeper',
        //     NoAI: true,
        //     Fuse: 0,
        // })
        // creeper.summon()
    }
})