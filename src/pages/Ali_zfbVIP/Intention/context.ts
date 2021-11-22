// 创建上下文对象
import { createContext } from 'react';

type Intention = {
    reqdata: { [key: string]: any }
}

export const IntentionContext = createContext<Intention>(
    (null as unknown) as Intention
);

// 三位分节算法
export function format_number(num: number): string {
    var str = num.toString();
    var reg = str.indexOf(".") > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g;
    return str.replace(reg, "$1,");
}

// function format_number(n: string): string {
    // var b = parseInt(n).toString();
    // var len = b.length;
    // if (len <= 3) {
    //     return b;
    // }
    // var r = len % 3;
    // return r > 0 ? b.slice(0, r) + "," + b.slice(r, len).match(/\d{3}/g).join(",") : b.slice(r, len).match(
    //     /\d{3}/g).join(",");
// }