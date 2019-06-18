let History = {
    _history: [],
    install (Vue) {
        Object.defineProperty(
            Vue.prototype, "$routerHistory", {
                get() {
                    return History;
                }
            }
        );
    },
    push(path) { //入栈
        this._history.push(path);
    },
    pop() {      // 删除数组最后一个元素
        this._history.pop();
    },
    canBack () { // 能不能进行返回
        return this._history.length > 1;
    }
};

export default History;