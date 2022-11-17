
export default class CreateWorker {
    constructor(Worker) {
        this.worker = new Worker();

        this.worker.onmessage = (data) => {
            this.onmessage(data);
        }
    }

    postMessage(data) {
        this.worker.postMessage(JSON.stringify(data))
    }

    onmessage(data) {
        console.log('data: ', data);
    }

    destory() {
        if(this.worker) {
            this.worker.terminate();
            this.worker = null;
        }
    }
}