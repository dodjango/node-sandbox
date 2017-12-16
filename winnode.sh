#!/bin/bash

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

# *** start container attached
docker run \
  -it \
  --rm \
  -e "NODE_ENV=production" \
  -w c:/app \
  --name "node-sandbox" \
  -v $WINPWD:C:/app \
  -p 49160:8080 \
  --entrypoint node \
  dodjango/nano-node:sac2016-8.9.3 \
  $*
