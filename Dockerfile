FROM node:8-alpine

RUN mkdir -p /uno
WORKDIR /uno
COPY . .

ENV NODE_ENV=production
RUN npm install
EXPOSE ${PORT}

CMD npm start
