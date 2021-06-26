import React from "react";
import View from "./ui/view";

function App() {
  return (
    <div className="App">
      <h1>Welcome to mdk</h1>
      <p className="desc">
        由于mc本身机制，使得datapack始终没有形成工程化开发，这导致datapack的开发效率其实很低。而mdk是使用typescript开发的js插件，可以运行在浏览器和nodejs端，借助mdk，开发者仅需关注实际的业务逻辑，typescript有着完整的语言基础和强大的代码提示能力，借助它可以帮助我们完成提示、模块化开发、命名冲突检测、穷举等问题，还可以对自己的模块暴漏供他人使用的接口，把模块上传到npm服务器，直接提供给远端用户使用，简直不要太好了。
      </p>
      <p className="desc">
        使用方法：src/ui下定义了ui层，可以不关注。src/mdk下是CBer编写数据包的入口（应该是codesandebox更新的问题，点击可能出现无法下载的问题）
      </p>
      <p className="desc">
        现阶段诸多api还在设计，会存在大量bug，如果你感兴趣可以加QQ群交流
        <span style={{ fontWeight: 800, color: "#345", paddingRight: 8 }}>
          916625813
        </span>
        <a target="__blank" href="https://github.com/hans000/mdk">
          github
        </a>
      </p>
      <View></View>
    </div>
  );
}

export default App;
