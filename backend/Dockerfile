FROM golang:alpine
RUN apk update
RUN apk add alpine-sdk
COPY ./backend /app/go
WORKDIR /app/go
EXPOSE 8000
CMD [ "go", "run", "/app/go/main.go" ]