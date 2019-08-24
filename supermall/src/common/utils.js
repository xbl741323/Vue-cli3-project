export function debounce(func, delay) { // 封装的防抖函数
    let timer = null;
    return function (...args) {
        // ...意味着可以传多个参数
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);

    };
}
