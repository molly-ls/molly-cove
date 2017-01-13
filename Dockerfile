FROM node:4-onbuild

RUN npm install -g phantomjs-prebuilt \
		&& phantomjs cool.js

EXPOSE 3000
