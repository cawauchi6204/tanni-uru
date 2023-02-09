FROM node:16-alpine
# WORKDIR /app/react
WORKDIR /app/react
COPY ./package.json /app/react
COPY ./package-lock.json /app/react
RUN npm install
COPY . /app/react
EXPOSE 5137
CMD [ "npm", "run", "dev" ]