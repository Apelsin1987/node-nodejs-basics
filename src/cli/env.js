const parseEnv = () => {
  const envObj = process.env
  const prefix = "RSS_"
  let text = ""
  for (const env in envObj) {
    text += `${prefix}${env}=${envObj[env]}; `
  }
  console.log(text.slice(0, -2))
}

parseEnv()
