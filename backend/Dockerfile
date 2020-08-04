FROM alpine:latest
RUN apk add python3 
RUN apk add py3-pip
RUN pip install --upgrade pip
RUN pip install flask
RUN pip install flask_cors

COPY . .
CMD ["python3", "server.py"]