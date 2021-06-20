FROM node:16-buster-slim
EXPOSE 8080

COPY . /app
WORKDIR /app

RUN yarn install
ENTRYPOINT [ "yarn", "serve" ]