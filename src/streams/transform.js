import { stdin, stdout } from "process"
import { Transform } from "stream"

const transform = async () => {
  const transformReverse = new Transform({
    transform(chunk, _, callback) {
      const text = chunk
        .toString()
        .replace("\n", "")
        .split("")
        .reverse()
        .join("")
      this.push(`${text}\n`)
      callback()
    },
  })

  stdin.pipe(transformReverse).pipe(stdout)
}

await transform()
