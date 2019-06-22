import Vue from "vue";
// 创建类似于cube-ui 的createAPI的用法的例子
function create(component, props) {
    const instance = new Vue({
        render(h) {
            return h(component, {props});
        }
    }).$mount();

    // 将实例挂生成在真实的dom上
    document.body.appendChild(instance.$el);

    // 获取comp实例,$children是指当前实例中所有的实例
    const comp = instance.$children[0];
    comp.remove = () => {
        comp.$destroy();  //销毁实例 释放内存
    };

    return comp;
}

// Object.defineProperty(obj, "data", {
//     enumerable: true,    // 可枚举 意思就是可以进行for in循环
//     configurable: true   // 可以修改 和删除
// });

export default create;