/**
 * ============================================================================
 * 前端重定向
 * ============================================================================
 * 
 * 网络上留存了一些已经失效的链接，需要重定向到正确的链接上。
 * 因为暂时没有自有服务器资源，无法在后端通过HTTP响应做重定向，所以暂时将功能做在前端。
 * 
 */

(function () {
    // 路径映射表
    let pathMap = {
        "/2018/06/28/Ubuntu-18-04-常用软件": "/2018/06/28/ubuntu-1804-hidpi-settings/",
        "/2018/06/28/Ubuntu-18-04-常用软件HiDPI高分屏设置": "/2018/06/28/ubuntu-1804-hidpi-settings/",
    };

    // 获取当前路径（已编码）
    let path = location.pathname;
    // 去除尾部`/`
    path = path.endsWith("/") ? path.substr(0, path.length - 1) : path;
    // 解码
    path = decodeURIComponent(path);
    // 去除所有空格
    path = path.replace(/ /g, "");

    // 若当前路径需要重定向
    if (path in pathMap) {
        // 重定向到对应的路径
        location.href = pathMap[path];
    }
})();
