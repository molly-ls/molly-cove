FROM wernight/phantomjs:latest
RUN dumb-init phantomjs
CMD phantomjs cool.js
