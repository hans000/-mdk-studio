import * as mdk from 'mdkjs'

export default mdk.createFile({
    filename: "timer",
    render(context) {
        // logic....
        context.add("say no-load");
    }
});
