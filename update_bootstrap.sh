#! /bin/sh

# A useful script to download the latest version of Bootstrap and jQuery
# Adapted from https://github.com/nicolas-van/bootstrap-4-github-pages

rm -rf node_modules package-lock.json
npm install bootstrap@4 jquery@3

rm -rf _sass/bootstrap
mkdir -p _sass/bootstrap
cp -r node_modules/bootstrap/scss/* _sass/bootstrap


cp js/lib/jquery-ui.* js/
rm -rf js/lib
mkdir -p js/lib
cp node_modules/bootstrap/dist/js/bootstrap.bundle.min.* js/lib/
cp node_modules/jquery/dist/jquery.min.* js/lib/
cp js/jquery-ui.* js/lib/

rm -rf node_modules package-lock.json