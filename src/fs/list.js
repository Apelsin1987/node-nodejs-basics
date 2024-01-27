import { access, readdir } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const list = async () => {
  const dirPath = join(dirname(fileURLToPath(import.meta.url)), "files")
  try {
    await access(dirPath)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed")
    }
  }
  try {
    const files = await readdir(dirPath, { withFileTypes: true })
    files.forEach((file) => {
      if (file.isFile()) {
        console.log(file.name)
      }
    })
  } catch (err) {
    console.error(err)
  }
}

await list()
