FROM node:lts-alpine

# install simple http server for serving static content
RUN npm install -g http-server

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# Inform Docker that the container is listening on the specified port at runtime.
EXPOSE 8080

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Run the specified command within the container.
CMD ["npm", "run", "serve"]