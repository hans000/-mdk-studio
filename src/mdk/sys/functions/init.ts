import * as mdk from 'mdkjs'

export default new mdk.File({
    filename: "init",
    namespace: "system",
    tag: "load", // 标记当前文件属于哪个tag文件
    render() {
        const command = mdk.useCommand()
        const timerScb = command.objective("timer"); // 使用上下文声明一个记分板，并导出使用
        const length = 100; // 声明常量，并导出使用
        // 其他逻辑...
        return {
            timerScb,
            length
        };
    }
});
