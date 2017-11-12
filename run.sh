#!/bin/bash

# *** test script file
if [[ -z $1 || ! -f $1 ]]; then
  echo please give me an existing script file to run
  echo Usage: $0 script.js
  exit 1;
fi

# *** detect os
unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    CYGWIN*)    machine=Cygwin;;
    MINGW*)     machine=MinGw;;
    *)          machine="UNKNOWN:${unameOut}"
esac

WINPWD=$(PWD)
if [[ "$machine" = "Cygwin" || "$machine" = "MinGw" ]]; then
  # *** on windows absolute path looks different
  WINPWD=$(cygpath.exe -w $PWD)
fi

# *** start container detached
docker run \
  -d \
  --rm \
  -e "NODE_ENV=production" \
  -u "node" \
  -m "300M" --memory-swap "1G" \
  -w //usr/src/app \
  --name "node-sandbox" \
  -v $WINPWD:/usr/src/app \
  -p 49160:8080 \
  dodjango/node-sandbox \
  bash sandbox/start_sandbox.sh $*

# *** show logs of running or error message of failed container
if [ $? -eq 0 ]; then
	docker logs -f node-sandbox
else
	echo $0 $1 FAILED
fi
