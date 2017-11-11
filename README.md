# node-sandbox

playing around with node using a docker container to run the scripts

## create docker image
```PowerShell
> build
```

## basic REPL usage
```PowerShell
> runREPL
> console.log("hello world");
hello world
undefined
```

## basic usage
### run script in docker container
npm install is performed before launching node
```PowerShell
> run simple_web_server.js
werb server is running
```

### stop docker container
```PowerShell
> stop
```

### kill docker container
```PowerShell
> kill
```