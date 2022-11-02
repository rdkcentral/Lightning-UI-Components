#!/bin/sh

mv ../node_modules/node_modules node_modules
npm run lint && echo -e "\xE2\x9C\x94" Code looks good!