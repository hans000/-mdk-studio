import * as mdk from 'mdkjs'

export const alpha19 = new mdk.File({
    filename: 'alpha19',
    description: ({ filename }) => `${filename}更新说明`,
    tag: 'load',
    render(ctx) {
        ctx.addComment('修改api createPack -> new Pack')
        ctx.addComment('拆分api createFile -> File TagFile LoottableFile PredicateFile')
        ctx.addComment('拆分api createRecipe -> CraftingShaped CraftingShapeless Smelting Smithing')
        ctx.addComment('修改JText api')
        ctx.addComment('引入scope，tag指令支持scope选项，避免重名')

        const commands = mdk.useCommand()
        
        commands.tellraw([
            mdk.Text.bold.text('bold'),
            mdk.Text.white.text(' normal')
        ])
        commands.tag.add('foo-tag')
    }
})