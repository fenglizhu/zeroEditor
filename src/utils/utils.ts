
/**
 * 转数组
 * @param data 遍历对象
 */
export function toArray<T>(data: T) {
    return Array.prototype.slice.call(data);
}