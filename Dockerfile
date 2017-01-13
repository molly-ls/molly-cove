# FROM wernight/phantomjs:latest
# RUN curl -v --url https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html
# CMD ["phantomjs", "cool.js"]

FROM node:4-onbuild

RUN npm install -g phantomjs-prebuilt \
		&& npm install -g casperjs \
		&& phantomjs cool.js

EXPOSE 3000
