FROM node:14

WORKDIR /app

RUN npm i nstall nodemon -g

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY [".", "./"]

CMD ["nodemon", "start"]
