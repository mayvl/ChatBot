
FROM python:3.7-alpine
MAINTAINER mayra vogler

ENV PYTHONUNBUFFERED 1

# install system dependencies
RUN apk add build-base python3-dev py-pip jpeg-dev zlib-dev postgresql-dev musl-dev bash

# arbitrary location choice: you can change the directory
RUN mkdir -p /opt/services/djangoapp/src
WORKDIR /opt/services/djangoapp/src

# install python dependencies
COPY ./requirements.txt ./docker_app/requirements.txt
RUN pip install --upgrade pip
RUN pip install -r ./docker_app/requirements.txt

# copy our project code
COPY . /opt/services/djangoapp/src
