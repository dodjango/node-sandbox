@ECHO OFF

docker run^
  -d^
  --rm^
  -e "NODE_ENV=production"^
  -u "node"^
  -m "300M" --memory-swap "1G"^
  -w "/usr/src/app"^
  --name "node-sandbox"^
  -v "%CD%":/usr/src/app^
  -p 49160:8080^
  dodjango/node-sandbox^
  bash sandbox/start_sandbox.sh %*

IF ERRORLEVEL 1 GOTO END
docker logs -f node-sandbox


:END