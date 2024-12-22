FROM node:20-buster-slim

WORKDIR /test

COPY package.json yarn.lock ./

RUN yarn

COPY test .

CMD ["npx", "ts-jest"]
