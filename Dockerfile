FROM public.ecr.aws/lambda/nodejs:12

COPY ./src ./src
# CMD ["node","src/index.js"]
ENTRYPOINT [ "node","src/index.js" ]
