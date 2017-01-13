FROM wernight/phantomjs:latest
COPY cool.js /cool.js
COPY config.json /config.json
RUN curl -v --url https://www.ic.gc.ca/auth/app/scr/ic/idm/login?lang=eng&goto=https://www.nuans.com/auth/app/scr/corp/nuans/member/order.html
CMD ["phantomjs", "cool.js"]
