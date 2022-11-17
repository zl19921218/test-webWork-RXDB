/*
 * @Author: 小石头
 * @Date: 2022-03-08 17:10:11
 * @LastEditors: 小石头
 * @LastEditTime: 2022-11-17 18:31:06
 * @Description:
 */

import React, { useEffect, useState, useMemo, useRef, useCallback } from "react";

import Worker from './worker/test.worker';

import TableData from './components/table';

export default (props) => {

    const [status, setStatus] = useState('');

    const [dataSource, setDataSource] = useState([]);

    const worker = useRef(null);
    
    useEffect(() => {
        worker.current = new Worker();

        worker.current.onmessage = function (event) {

            const { type, value }  = JSON.parse(event.data);

            switch(type) {
                case 'connentResult':
                    setStatus(value)
                    break;
                case 'searchResult':
                    setDataSource([...value]);
                    break;
            }
        }
        return () => {
            
        }
    }, [])

    const openDataBase = useCallback(() => {
        worker.current.postMessage({
            type: 'connect',
        });
    }, [])

    const descSearchDate = useCallback(() => {
        worker.current.postMessage({
            type: 'search',
            sort: 'desc'
        });
    }, [dataSource]);

    const ascSearchDate = useCallback(() => {
        worker.current.postMessage({
            type: 'search',
            sort: 'asc'
        });
    }, [dataSource])

    const insertData = useCallback(() => {
        worker.current.postMessage({
            type: 'insert',
        });
    }, [])



    return (
        <div>
            <button onClick={openDataBase}>连接数据库</button>
            <div>连接状态{status}</div>
            <button onClick={insertData}>插入数据</button>
            <hr />
            <button onClick={descSearchDate}>降序查询</button>
            <button onClick={ascSearchDate}>升序查询</button>

            <TableData dataSource={dataSource} />
        </div>
    );
};
