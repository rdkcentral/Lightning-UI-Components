#!/bin/sh

[ ! -d "node_modules" ] && yarn install

yarn lint