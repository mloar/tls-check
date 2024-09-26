FROM node:18-slim
RUN mkdir /app
WORKDIR /app
COPY . .

EXPOSE 6969

CMD ["node", "index.mjs"]
