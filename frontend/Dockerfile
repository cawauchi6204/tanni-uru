FROM node:16-alpine
WORKDIR /app/react
COPY package.json ./react
COPY package-lock.json ./react
RUN npm install
COPY . ./react
EXPOSE 5137
CMD [ "npm", "run", "dev" ]