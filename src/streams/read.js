import { createReadStream } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { stdout } from "process"

const read = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  )
  const rs = createReadStream(filePath)

  rs.on("data", (chunk) => stdout.write(chunk))
  rs.on("error", (err) => console.log(err.message))
}

await read()
