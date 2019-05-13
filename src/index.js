// indexe.js显示要求引入的loadsh必须存在，然后将它绑定为 _ (没有全局作用域污染)
// 通过声明模块所需的依赖，webpack能够利用这些信息去构建依赖图，然后使用图生成一个优化过的，会以正确顺序执行的 bundle
import _ from 'loadsh';
import Print from './print.js';

function component() {
    var element = document.createElement("div");
    var btn = document.createElement("button");

    // 废弃：Loadsh(目前通过一个script脚本引入)对于执行这一行是必须的
    // Loadsh, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    btn.innerHTML = 'Click me and check the console';
    btn.onclick = Print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());