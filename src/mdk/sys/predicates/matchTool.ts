import mdk from "mdkjs";

export default mdk.createFile({
    filename: "match-tool",
    type: "predicate", // 声明类型，默认是mcfunction
    render(context) {
        // predicate 相关的api还在设计中，因此只能显式的声明
        context.add(
            mdk.PredicateItem.matchTool({
                enchantments: [
                    {
                        enchantment: "minecraft:silk_touch",
                        levels: {
                            min: 1
                        }
                    }
                ]
            })
        );
    }
});
