import { createReadStream, createWriteStream } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { createGzip } from "zlib"

const compress = async () => {
  const dirPath = join(dirname(fileURLToPath(import.meta.url)), "files")
  const pathFrom = join(dirPath, "fileToCompress.txt")
  const pathTo = join(dirPath, "archive.gz")
  const rs = createReadStream(pathFrom)
  const ws = createWriteStream(pathTo)
  const gzip = createGzip()
  rs.pipe(gzip).pipe(ws)
}

await compress()
