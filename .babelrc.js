/*
 * @Author: 小石头
 * @Date: 2022-03-08 18:54:54
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-16 13:49:40
 * @Description: 
 */

module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                loose: true,
                modules: false,
            }
        ],
        "@babel/preset-react"
    ]
};