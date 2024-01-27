import fs from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const rename = async () => {
  const dirPath = join(dirname(fileURLToPath(import.meta.url)), "files")
  const oldFilePath = join(dirPath, "wrongFilename.txt")
  const newFilePath = join(dirPath, "properFilename.md")
  const errFailed = new Error("FS operation failed")
  try {
    await fs.access(oldFilePath)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw errFailed
    }
  }
  try {
    await fs.access(newFilePath)
    throw errFailed
  } catch (err) {
    if (err.code === "ENOENT") {
      await fs.rename(oldFilePath, newFilePath)
    } else {
      throw err
    }
  }
}

await rename()
