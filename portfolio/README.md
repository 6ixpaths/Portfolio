# portfolio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## Docker Setup

### Build docker image for front end
```
sudo docker build -t portfolio .
```

### Build docker image for server
```
sudo docker build -t server -f Dockerfile.server .
```

### Run docker portfolio image
```
sudo docker run -p 8080:8080 --detach --name porty portfolio:latest
```

This will bind your `localhost:8080` to the containers port `8080`


### Run docker server image
```
sudo docker run -p 3000:3000 --detach --name backend server:latest
```


## Run with docker-compose

```
docker-compose up -d --build
```

### Deactivate with docker-compose

```
docker-compose down
```

## Notes

If changing environmental variables rebuild image with docker

To listen to to stdout from service image run the following docker command
```
sudo docker attach backend
```
