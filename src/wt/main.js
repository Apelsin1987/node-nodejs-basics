import { Worker } from "worker_threads"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { cpus } from "os"

const performCalculations = async () => {
  const filePath = join(dirname(fileURLToPath(import.meta.url)), "worker.js")
  const n = 10
  const promisesArr = []

  for (let i = 0; i < cpus().length; i += 1) {
    const promise = new Promise((resolve) => {
      const worker = new Worker(filePath, { workerData: i + n })
      worker.on("message", (result) => {
        resolve(result)
      })
    })
    promisesArr.push(promise)
  }

  Promise.all(promisesArr).then((resultArr) => console.log(resultArr))
}

await performCalculations()
