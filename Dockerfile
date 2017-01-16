# FROM node:4-onbuild

# RUN npm install -g phantomjs-prebuilt \
# 		&& npm install -g casperjs

# EXPOSE 3000

FROM cmfatih/slimerjs

CMD ["/usr/bin/slimerjs", "slimerjs-test.js"]