#!/bin/bash
echo "Building docker image"
docker build --platform linux/amd64 -t cse-5333-chat-server .

echo "tagging docker image"
docker tag cse-5333-chat-server amlanalok/cse-5333-chat-server

echo "Pushing image to Docker Hub"
docker push amlanalok/cse-5333-chat-server

echo "Docker image has been successfully pushed"