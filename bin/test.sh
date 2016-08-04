#!/bin/bash

set -o errexit #Exit on error
echo Test Sweep env: $NODE_ENV
npm run mocha

if [[ $NODE_ENV == "travis" ]]; then
  echo "Skipping Travis build: Launch e2e tests on browserstack"
  #npm run e2e:travis
else
  echo "Skipping Local E2E testing"
  #npm run nightwatch
fi