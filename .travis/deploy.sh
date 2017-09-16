#!/bin/sh
yarn run gh-pages -d build -r https://$GH_TOKEN@github.com/QualitySoftwareDevelopers/qualitysoftwaredevelopers.github.io.git -b master
