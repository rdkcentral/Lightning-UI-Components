#!/bin/bash
set -x
set -e

webpack --config ../../utils/build/webpack.simple.js --config ../../utils/build/webpack.extracted.js --hide-modules
