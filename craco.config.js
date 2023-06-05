/*
 * @Description:  
 * @Author: huangyue
 * @LastEditors: huangyue
 * @LastEditTime: 2023-06-02 16:19:20
 */
const path = require("path");
const CracoLessPlugin = require("craco-less");

module.exports = {
    webpack: {
        alias: {
            "@": path.resolve(__dirname, "src/")
        }
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                }
            }
        }
    ]
};