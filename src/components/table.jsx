import React from "react";

import { Table } from "antd";

const columns = [
    {
        key: "id",
        dataIndex: "id",
        title: "id",
    },
    {
        key: "name",
        dataIndex: "name",
        title: "姓名",
    },
    {
        key: "age",
        dataIndex: "age",
        title: "年龄",
    },
    {
        key: "time",
        dataIndex: "time",
        title: "时间",
    },
    {
        key: "grade",
        dataIndex: "middleSchool",
        title: "分数",
        render: text => text.grade
    }
];

export default React.memo(({ dataSource = [] }) => {
    return <Table columns={columns} dataSource={dataSource} pagination={{ pageSize: 1000 }} rowKey={row => row.id} />;
});
