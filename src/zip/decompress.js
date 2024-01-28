import { createReadStream, createWriteStream } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { createUnzip } from "zlib"

const decompress = async () => {
  const dirPath = join(dirname(fileURLToPath(import.meta.url)), "files")
  const pathTo = join(dirPath, "fileToCompress.txt")
  const pathFrom = join(dirPath, "archive.gz")
  const rs = createReadStream(pathFrom)
  const ws = createWriteStream(pathTo)
  const unzip = createUnzip()
  rs.pipe(unzip).pipe(ws)
}

await decompress()
