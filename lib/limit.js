/**
 * 限制字符串长度
 *
 * @param value 字符串
 * @param cLimit 限制长度
 * @param cSuffix 尾缀
 */
export default function limit(value, cLimit, cSuffix) {
    const type = typeof value;
    if (type !== 'string') {
        throw new Error(`must be a string, current: ${type}`);
    }
    const limit = cLimit || 20;
    const suffix = cSuffix || '...';
    if (value.length > limit) {
        return value.substr(0, limit) + suffix;
    }
    return value;
}
//# sourceMappingURL=limit.js.map