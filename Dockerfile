FROM node:16

WORKDIR /app_rest

COPY package*.json ./
COPY environments/.env.development /app_rest/
COPY environments/.env.production /app_rest/
COPY environments/.env.test /app_rest/

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start:test" ]