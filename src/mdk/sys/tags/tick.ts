import * as mdk from 'mdkjs'

export default mdk.createFile({
    filename: "functions/tick",
    type: "tags",
    replace: true,
    render(context) {
        context.add("system:not-exist-file");
    }
});
