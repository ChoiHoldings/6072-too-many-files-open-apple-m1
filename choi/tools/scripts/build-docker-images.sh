#!/bin/sh

# Print each command and exit on error
set -e

echo "[INFO] Bulding local docker images..."

# Lead API Web Service
docker build -t api-base -f apps/api/Dockerfile --target=base .
docker build -t api:dev -f apps/api/Dockerfile --target=dev .
docker build -t web:dev -f apps/web/Dockerfile --target=dev .
