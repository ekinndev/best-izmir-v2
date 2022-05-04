FROM node:10.19-alpine3.11

WORKDIR /app

RUN apk add python make g++

COPY package.json package-lock.json ./

RUN npm install

COPY . .

VOLUME [ "/app/src" ]
VOLUME [ "/app/public" ]

EXPOSE 3001

CMD ["npm", "run", "dev"]
