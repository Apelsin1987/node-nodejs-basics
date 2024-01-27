import { access, writeFile } from "fs/promises"
import { fileURLToPath } from "url"
import { dirname, join } from "path"
const create = async () => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "fresh.txt"
  )
  try {
    await access(filePath)
    throw new Error("FS operation failed")
  } catch (err) {
    if (err.code === "ENOENT") {
      await writeFile(filePath, "I am fresh and young")
    } else {
      throw err
    }
  }
}

await create()
