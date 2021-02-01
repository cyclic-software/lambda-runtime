FROM public.ecr.aws/lambda/nodejs:12

# combine both src and local-app
ADD ./src ./
ADD ./app ./

# install dependencies
RUN npm install

# needed for _proxy.js
RUN npm install axios

CMD ["src/_proxy.handler"]
