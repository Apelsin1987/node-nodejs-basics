import { access, readFile } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const read = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRead.txt"
  )
  try {
    await access(filePath)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed")
    } else {
      console.error(err)
    }
  }
  try {
    const data = await readFile(filePath)
    console.log(data.toString())
  } catch (err) {
    console.error(err)
  }
}

await read()
