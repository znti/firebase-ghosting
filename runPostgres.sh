#!/bin/bash

docker run \
	--rm \
	--name pg-docker \
	--network="host" \
	-e POSTGRES_PASSWORD=docker \
	-d \
	-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data \
	postgres
