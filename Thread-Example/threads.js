const { 
    isMainThread, 
    workerData,
    Worker } = require('node:worker_threads'); 

if (isMainThread) {
    
    console.log(`Main Thread ! Process id: ${process.pid}`)
    new Worker(__filename, {
        workerData: [7, 4, 9, 6, 2, 5]
    })
    new Worker(__filename, {
        workerData: [3 , 7, 1, 6, 2]
    })
} else {
    console.log(`Worker ! Process id: ${process.pid}`)
    console.log(`${workerData} sorted is ${workerData.sort()}`);
}