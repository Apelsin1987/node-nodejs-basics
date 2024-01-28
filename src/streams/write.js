import { createWriteStream } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { stdin } from "process"

const write = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToWrite.txt"
  )
  const ws = createWriteStream(filePath)

  stdin.on("data", (chunk) => {
    ws.write(chunk)
  })
  stdin.on("end", () => {
    ws.end()
  })
}

await write()
