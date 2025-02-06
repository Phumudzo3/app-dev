// import { Index } from "./index";
// const cluster = require('cluster');
// const os = require('os');
// if (cluster.isPrimary) {
//     const numCPUs = os.cpus().length;
//     console.log(numCPUs);
//     // Fork workers
//     for (let i = 0; i < numCPUs; i++) {
//         cluster.fork();
//     }
//     cluster.on('exit', (worker, code, signal) => {
//         console.log(`Worker ${worker.process.pid} died`);
//         cluster.fork(); // Restart a new worker
//     });
// } else {
//     console.log(`Worker ${process.pid} started`);
//     new Index().int();
// }
