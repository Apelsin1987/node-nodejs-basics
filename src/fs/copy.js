import { access, cp } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"

const copy = async () => {
  const dirName = "files"
  const dirPath = dirname(fileURLToPath(import.meta.url))
  const dirFrom = join(dirPath, dirName)
  const dirTo = join(dirPath, `${dirName}-copy`)
  const errFailed = new Error("FS operation failed")
  try {
    await access(dirFrom)
  } catch (err) {
    if (err.code === "ENOENT") {
      throw errFailed
    }
  }
  try {
    await access(dirTo)
    throw errFailed
  } catch (err) {
    if (err.code === "ENOENT") {
      await cp(dirFrom, dirTo, { recursive: true })
    } else {
      throw err
    }
  }
}

await copy()
