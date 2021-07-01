#!/bin/sh

rm -rf ./node_modules
rm -rf ./dist
rm -rf ./bundle
rm -rf ./temp


npm install --legacy-peer-deps

echo "node modules are installed successfully"

npm run build:ssr

cp app.yaml dist/
