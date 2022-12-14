
# -------------------------------------------------------------------- BUILD SESSION --------------------------------------------------------------------

FROM node:16.13.1-alpine3.14 as builder

WORKDIR /app

COPY package.json .

RUN yarn cache clean && yarn install

COPY . /app

RUN yarn build

# -------------------------------------------------------------------- IMAGE SESSION --------------------------------------------------------------------

FROM node:16.13.1-alpine3.14

ENV TZ=

WORKDIR /app

COPY --from=builder /app/package.json .

RUN ln -snf /usr/share/zoneinfo/America/Sao_Paulo /etc/localtime > /etc/timezone && yarn cache clean && yarn install --prod

EXPOSE 3000

COPY --from=builder /app .

RUN yarn build

CMD ["yarn", "start"]

