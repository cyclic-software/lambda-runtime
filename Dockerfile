FROM public.ecr.aws/lambda/nodejs:12

ADD ./src ./src

# need to pull in package.json or run npm install

ADD ./node_modules ./node_modules

CMD ["src/_proxy.handler"]
