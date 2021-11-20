docker build -t cse-5333-chat-server .

docker run -dp 9000:9000 cse-5333-chat-server

docker tag cse-5333-chat-server amlanalok/cse-5333-chat-server

docker push amlanalok/cse-5333-chat-server