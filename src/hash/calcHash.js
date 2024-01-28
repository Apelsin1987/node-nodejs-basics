import { createHash } from "crypto"
import { createReadStream } from "fs"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const calculateHash = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToCalculateHashFor.txt"
  )
  const hash = createHash("sha256")
  const rs = createReadStream(filePath)

  rs.on("data", (chunk) => {
    hash.update(chunk)
  })
  rs.on("end", () => {
    console.log(hash.digest("hex"))
  })
  rs.on("error", (err) => {
    console.error(err.message)
  })
}

await calculateHash()
