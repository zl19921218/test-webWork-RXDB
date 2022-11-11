export const userScheme = {
    title: "user collection",
    version: 0,
    description: "用户表",
    primaryKey: "ID",
    type: "object",
    properties: {
        ID: {
            type: "string",
        },
        name: {
            type: "string",
            maxLength: 128,
        },
        age: {
            type: "number",
        },
        email: {
            type: "string",
            maxLength: 100,
        },
        time: {
            type: "number",
        },
        timeString: {
            type: 'string',
        }
    },
};
