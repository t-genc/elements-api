FROM node:16-slim

WORKDIR /usr/src/app

COPY ./package.json ./

COPY ./tsconfig.json ./

RUN npm install

COPY . .

RUN npm run build

CMD ["node","build/src/app.js"]