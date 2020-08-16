# admin-server
An basic framework with server(egg.js) and front page(vue.js & ant design vue). You can easily use it by following the set up bellow.

And after you run it, this will be an out of the box project.

# Development
Install dependencies in Admin & Server. Then run
```
cd Admin
npm run serve

cd Server
npm run dev
```
it will start to serve in localhost:8080.

# Lint
`./lint.sh` in root directory is used to lint all code in Admin & Server. You can run it before commit.

# Deploy
It depends on how you want to use this project. You might need to make some modify on Server files.

Normally, when you don't have any nginx or other reverse proxy running before the egg.js Server. then just build the front page in Admin by running
```
npm run build
```
then the dist directory will be created.

Deploy all files to your server and then run start in Server.
```
npm run start
```
then you will be able to visit your page on your server machine through port 80, by using your own domain which refer to your server machine or an public IP address.