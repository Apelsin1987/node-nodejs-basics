const parseArgs = () => {
  const argsArr = process.argv.slice(2)
  let text = argsArr.reduce((acc, item) => {
    if (item.startsWith("--")) {
      if (acc !== "") acc += ", "
      acc += `${item.slice(2)} is`
    } else {
      acc += ` ${item}`
    }
    return acc
  }, "")
  console.log(text)
}

parseArgs()
