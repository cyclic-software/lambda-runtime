#!/usr/bin/env bash

set -exuo pipefail

echo "Running $0 expecting app source dir as first arg"

cd "$(dirname "$0")"

APP_SRC=$1

ls -l "$APP_SRC"/

ls -l "$APP_SRC"/*

echo "copying $APP_SRC to app/*"

cp -R "$APP_SRC"/* app/
