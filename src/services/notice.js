import Vue from "vue";
import Notice from "@/components/Notice.vue";

// 全局调用 通用组件
// 给Notice创建一个组件实例方法 可以动态编辑自身并挂载
Notice.getInstance = props => {
    // 创建一个Vue 实例
    const instance = new Vue({
        render(h) {
            // 渲染函数 用于渲染制定虚拟渲染DOM
            return h(Notice, { props });
        }
    }).$mount(); // 执行挂载,若不指定选择器，则模板将被渲染为文档之外的元素

    // 必须使用原生dom api把它插入文档中
    // $el指的是渲染的Notice中真实dom元素   
    document.body.appendChild(instance.$el);

    // 获取notice实例，$children指的是当前Vue实例中包含的所有组件实例
    const notice = instance.$children[0];
    return notice;
};


// 单例模式 全局范围唯一创建一个Notice实例 用于节约资源
let msgInstance = null;

function instance() {
    msgInstance = msgInstance || Notice.getInstance();
    return msgInstance;
}

// 暴露接口 用于全局来使用
export default {
    info({duration = 2, content = ""}) {
        instance().add({
            content,
            duration
        });
    }
};

