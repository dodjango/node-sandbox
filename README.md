# node-sandbox

This sandbox allows you to start a node or a npm process whithin a docker container but it feels like it were on your machine. There are to script node.sh and npm.sh or node.cmd and npm.cmd working as the executable.

## Global npm modules

Some global moduls are installed like grunt-cli, angular-cli and so on. Please check the Dockerfile to see the modules list.
The node and npm scripts creates the docker container ad hoc and will remove it after the process exits. Therefore the container is stateless and installing global modules needs to create a new docker image.

### add more global modules

To add a global modulelike jshint you can use this script.

```bash
./npm-install-global.sh jshint
```

## Using Bash

### create docker image

The first thing you have to do is to build the container image or to download id by pulling dodjango/node-sandbox from docker hub.

```bash
./build.sh
```

check with

```bash
docker images
```

### REPL mode

```Bash
./node.sh
> console.log("hello world");
> process.exit(42);
hello world
undefined
> console.log(module.id);
<repl>
undefined
> process.exit(42);
```

### basic usage

#### run script in docker container

```Bash
./node.sh fs-samples/fs-read-write.js
hello world
```

#### stop / kill docker container

This is only needed if you start a container withoud removing it automatically, e.g. if you hav your own script or bash command to run the container.

```Bash
./stop.sh
```

```Bash
./kill.sh
```

## Windows Command Line

Nearly all Bash scripts are also available as windows batch script.

### Using slashes

In order to launch a script file in a sub folder you have to use slashes instead of backslashes as path delimiter. The script arguments are passed to the node process running in the linux container and need linux style.

```batch
npm.cmd install
up to date in 0.494s
node.cmd fs-samples/fs-read-write.js
hello world
```
