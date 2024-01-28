FROM node:current-alpine

WORKDIR /usr/project

COPY . .
RUN yarn set version stable
RUN yarn install

CMD ["yarn", "dev"]
