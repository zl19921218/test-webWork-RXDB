/*
 * @Author: 小石头
 * @Date: 2022-10-26 11:37:10
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-17 18:40:38
 * @Description:
 */

import moment from "moment";
import { initDB, createCollections } from "../db/createDatabase";
import { userScheme } from "../db/scheme";

let user = null;

async function craeteCollection() {
    await initDB("testDB");

    user = await createCollections('user', "testDB", userScheme);

    self.postMessage(JSON.stringify({
        type: 'connentResult',
        msg: "工作线程向主线程发送消息",
        value: 'success',
    }));

}

async function insert() {
    await user.bulkInsert((new Array(100)).fill().map((_, i) => ({
        id: `${i + 1}`,
        name: `${i + 1}`,
        age: 20 + i,
        time: moment().subtract(i, 'd').valueOf(),
        timeString: moment().subtract(i, 'd').format("YYYY-MM-DD hh:mm:ss"),
        middleSchool: {
            grade: i + 1
        }
    })));

    await user.insert({
        id: '101',
        name: '',
        age: 10086,
        middleSchool: {}
    })
}

async function search({sort}) {
    const RxData = await user.find({
        selector: {
            name: {
                $regex: '.*1.*'
            }
        },
        sort: [
            {
                'middleSchool.grade': sort
            }
        ],
    }).exec();

    const data = []

    RxData.forEach(item => {
        data.push(item.toJSON());
    })

    self.postMessage(JSON.stringify({
        type: 'searchResult',
        msg: "工作线程向主线程发送消息",
        value: data,
    }));
}



self.onmessage = function (event) {
    console.log("work event: ", event);

    const { type, sort } = event.data;
    switch(type) {
        case 'connect':
            craeteCollection();
            break;
        case 'search':
            search({sort});
            break;
        case 'insert':
            insert();
            break;
    }
};

self.postMessage({
    value: "工作线程向主线程发送消息",
});
