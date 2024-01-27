import { access, unlink } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const remove = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fileToRemove.txt"
  )
  try {
    await access(filePath)
    unlink(filePath)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("FS operation failed")
    }
  }
}

await remove()
