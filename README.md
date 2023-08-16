## Prerequisites
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/)

## Setup 
```bash
$ git clone https://github.com/808BITT/solid-template.git project-name
$ cd project-name
```
Clones the repository and changes the directory to the project folder.<br>

## Install
```bash
$ npm install 
```
Installs all dependencies.<br>

## Dev
```bash
$ npm run dev
```
Starts the development server.<br>
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Build
```bash
$ npm run build
```
Builds the app for production to the `dist` folder.<br>


## Stage
```bash
$ docker build --no-cache -t project-name .
```
```bash
$ docker stop project-name
```
```bash
$ docker rm project-name
```
```bash
$ docker run -d -p 80:3000 --name project-name project-name 
```
Uses the `Dockerfile` to build the app for production to the `dist` folder.<br>
Runs the app in the production mode.<br>
Open [http://localhost](http://localhost) to view it in the browser.

## Deploy

You can deploy the `dist` folder to any static host provider (Azure, AWS, Linode, etc.)
<br>
```bash
$ scp -r dist user@server:/
```
Copies the `dist` folder to the server.

## Prod Server:
### Start
```bash
$ nohup npx serve -l 80 /dist > /path/to/output.log 2>&1 &    
```
Starts the server on port 80 and logs the output to `output.log`.
### Stop
```bash
pid=\$(ps aux | grep '[n]px serve -l 80 /dist' | awk '{print \$2}')
  if [ -n "\$pid" ]
  then
      kill \$pid
      echo "Killed process with PID \$pid"
  else
      echo "No process found"
  fi
```
Stops the server.<br>