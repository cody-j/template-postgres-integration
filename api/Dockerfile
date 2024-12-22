FROM node:18-buster-slim AS builder
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN npx tsc

FROM node:18-buster-slim AS production
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/dist ./dist
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile
USER node
CMD ["node", "dist/index.js"]
