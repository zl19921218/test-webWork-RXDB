/*
 * @Author: 小石头
 * @Date: 2022-10-26 14:15:55
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-11 15:32:56
 * @Description: 
 */

import Worker from './worker/test.worker.js';

const connect = document.getElementById("connect");

const connentResult = document.getElementById("connentResult");

const search = document.getElementById("search");

const result = document.getElementById("result");

const worker = new Worker();

connect.onclick = function() {
    worker.postMessage({
        type: 'connect',
    });
}
search.onclick = function() {
    worker.postMessage({
        type: 'search',
    });
}
            
worker.onmessage = function (event) {
    console.log('event: ', event);

    const { type, value } = event.data;
    switch(type) {
        case 'connentResult':
            connentResult.innerText = value;
            break;
        case 'searchResult':
            result.innerText = value.join('\n');
            break;
    }
}

worker.onerror = function(error) {
    console.log('error: ', error)
}