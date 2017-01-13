FROM node:4-onbuild

RUN npm install -g phantomjs-prebuilt \
		&& npm install -g casperjs \
		&& phantomjs cool.js

EXPOSE 3000
