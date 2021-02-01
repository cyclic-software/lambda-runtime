#!/usr/bin/env bash

set -exuo pipefail

echo "Running inject"

cd "$(dirname "$0")"

APP_SRC=$1

ls -l "$APP_SRC"/

ls -l "$APP_SRC"/*

echo "moving $APP_SRC to src/*"

cp -r "$APP_SRC" src/
