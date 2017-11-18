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

# *** start install process attached
docker run \
  -it  \
  -u "node" \
  -e "NODE_ENV=production" \
  -m "300M" --memory-swap "1G" \
  -w //usr/src/app \
  --name "node-sandbox-npm-install-global" \
  --entrypoint npm \
  dodjango/node-sandbox \
  install -g $*

EXITCODE=$?
if [ ! $EXITCODE -eq 0 ]; then 
  echo "npm $* FAILED with $EXITCODE";
  exit 1;
fi

# *** commit changes to the image
docker commit --change "ENTRYPOINT [ \"bash\" ]" node-sandbox-npm-install-global dodjango/node-sandbox:latest

# *** remove container
docker rm node-sandbox-npm-install-global
