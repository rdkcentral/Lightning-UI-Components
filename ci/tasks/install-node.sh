#!/bin/sh

# Install
npm ci
# tar -cf $PACKAGE node_modules
# mv $PACKAGE ../build/$PACKAGE
cp -r node_modules ../node_modules