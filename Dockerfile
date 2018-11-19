FROM node:8

RUN mkdir -p /uno
WORKDIR /uno
COPY . .

RUN yarn install --prod

EXPOSE ${PORT}

ENV NODE_ENV=production
CMD ["yarn", "start"]
