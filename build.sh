#!/bin/sh

rm -rf ./node_modules
rm -rf ./dist
rm -rf ./bundle
rm -rf ./temp


npm install

echo "node modules are installed successfully"

npm run build
