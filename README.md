# node-sandbox

## Bash

playing around with node using a docker container to run the scripts

### create docker image

```bash
./build.sh
```

check with

```bash
docker images
```

### REPL usage

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

#### stop docker container

```Bash
./stop.sh
```

#### kill docker container

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
