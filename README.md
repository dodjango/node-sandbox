# node-sandbox

playing around with node using a docker container to run the scripts

## create docker image
```Bash
$ ./build.sh
```
check with
```Bash
$ docker images
```

## basic REPL usage
```Bash
$ ./runREPL.sh
> console.log("hello world");
> process.exit(42);
hello world
undefined
> process.exit(42);
node  FAILED with 42;
```

## basic usage
### run script in docker container
npm install is performed automatically before launching node
```Bash
$ ./run.sh fs-samples/fs-read-write.js
hello world
```
check with
```Bash
$ docker ps
```

### stop docker container
```Bash
$ ./stop.sh
```

### kill docker container
```Bash
$ ./kill.sh
```