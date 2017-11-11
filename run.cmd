@ECHO OFF

docker run^
  --rm^
  -d^
  -e "NODE_ENV=production"^
  -m "300M" --memory-swap "1G"^
  -w "/usr/src/app"^
  --name "node-sandbox"^
  -v "%CD%":/usr/src/app^
  node-sandbox^
  node %*
