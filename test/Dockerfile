FROM node:18-buster-slim

WORKDIR /test

RUN yarn global add jest

COPY package.json yarn.lock ./

RUN yarn

COPY . .

CMD ["npx", "jest"]
