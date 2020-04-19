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

### Build docker image
```
sudo docker build -t portfolio .
```

### Run docker image
```
sudo docker run -p 8080:8080 --detach --name porty portfolio:latest
```

This will bind your `localhost:8080` to the containers port `8080`