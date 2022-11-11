
import { createRxDatabase } from "rxdb";

import { getRxStorageDexie } from 'rxdb/plugins/dexie';

const database = {};

async function createDB(name = 'testDB') {
    database[name] = await createRxDatabase({
        name,
        storage: getRxStorageDexie('idb'),
        multiInstance: true,           
        eventReduce: true,
    })

    database[name].$.subscribe(action => {
        console.log('action: ', action)
    })

    return database[name];
}

export async function createCollections(name, dbName, schema = {}) {

    const collection = await database[dbName].addCollections({
        [name]: {
            schema
        },
    });

    collection[name].$.subscribe(changeEvent => {
        console.log('changeEvent: ', changeEvent)
    })

    return collection[name];
}  


export async function initDB(name) {
    return database[name] || (await createDB(name));
}





