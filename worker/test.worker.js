/*
 * @Author: 小石头
 * @Date: 2022-10-26 11:37:10
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-11 15:35:01
 * @Description:
 */

import moment from "moment";
import { initDB, createCollections } from "../db/createDatabase";
import { userScheme } from "../db/scheme";

let user = null;

async function craeteCollection() {
    await initDB("testDB");

    user = await createCollections('user', "testDB", userScheme);

    self.postMessage({
        type: 'connentResult',
        msg: "工作线程向主线程发送消息",
        value: 'success',
    });

}

async function insert() {
    user.bulkInsert((new Array(100)).fill().map((_, i) => ({
        ID: `${i + 1}`,
        name: 'i + 1',
        age: 20 + i,
        time: moment().subtract(i, 'd').valueOf(),
        timeString: moment().subtract(i, 'd').format("YYYY-MM-DD hh:mm:ss")
    })))
}

async function search() {
    const queryTime = moment().subtract(50, 'd').valueOf();
    const queryTimeString = moment().subtract(30, 'd').format("YYYY-MM-DD hh:mm:ss");

    const timeArr = await user.find({
        selector: {
            timeString: {
                $gt: queryTimeString,
                $exists: true,
            }
        }
    }).exec();

    const time = timeArr.map(item => item.get('timeString'))

    self.postMessage({
        type: 'searchResult',
        msg: "工作线程向主线程发送消息",
        value: time.sort((a, b) => b - a),
    });
}



self.onmessage = function (event) {
    console.log("work event: ", event);

    const { type } = event.data;
    switch(type) {
        case 'connect':
            craeteCollection();
            break;
        case 'search':
            search();
            break;
    }
};

self.postMessage({
    value: "工作线程向主线程发送消息",
});
