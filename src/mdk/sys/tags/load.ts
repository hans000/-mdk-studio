import * as mdk from 'mdkjs'
import init from "../functions/init";

export default mdk.createFile({
    filename: "functions/load",
    description: 'sys pack下的tag load文件，用于处理function文件加载',
    type: "tags",
    render(context) {
        context.add(init);
    }
});
