import * as mdk from 'mdkjs'

export default new mdk.File({
    filename: "timer",
    render(context) {
        // logic....
        context.add("say no-load");
    }
});
