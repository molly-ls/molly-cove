FROM node:4-onbuild

ENV http_proxy proxy:f79d1ac2e616-49c1-93ac-cb4d647136d7@proxy-23-21-132-4.proximo.io:80 && \
    https_proxy proxy:f79d1ac2e616-49c1-93ac-cb4d647136d7@proxy-23-21-132-4.proximo.io:80
    
RUN npm install -g phantomjs-prebuilt \
		&& npm install -g casperjs

EXPOSE 3000