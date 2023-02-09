FROM golang:alpine
RUN apk update
RUN apk add alpine-sdk
COPY . /app/go
WORKDIR /app/go
RUN go mod tidy
EXPOSE 8000
CMD [ "go", "run", "/app/go/main.go" ]