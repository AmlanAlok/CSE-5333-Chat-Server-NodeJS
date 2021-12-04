#!/bin/bash
echo "Starting script"

echo "Building docker image"
docker build -t cse-5333-chat-server .

echo "Running docker image"
docker run -dp 9000:9000 cse-5333-chat-server

docker ps
echo "docker image ran with success"