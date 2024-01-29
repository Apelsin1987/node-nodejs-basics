import { fileURLToPath } from "url"
import { dirname, join } from "path"
import { stdin, stdout } from "process"
import { spawn } from "child_process"

const spawnChildProcess = async (args) => {
  const filePath = join(
    dirname(fileURLToPath(import.meta.url)),
    "files",
    "script.js"
  )
  const childProcess = spawn("node", [filePath, ...args], {
    stdio: ["pipe", "pipe", "pipe", "ipc"],
  })
  stdin.pipe(childProcess.stdin)
  childProcess.stdout.pipe(stdout)
}

spawnChildProcess(["arg1", "arg2"])
