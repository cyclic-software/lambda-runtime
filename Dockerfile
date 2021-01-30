FROM public.ecr.aws/lambda/nodejs:12

ADD ./src ./src
ADD ./node_modules ./node_modules
# RUN echo '#### /lambda-entrypoint.sh ###############################################'
# RUN cat /lambda-entrypoint.sh
# RUN echo '#### /var/runtime/bootstrap ##############################################'
# RUN cat /var/runtime/bootstrap
# RUN echo '#### /var/runtime/index.js ###############################################'
# RUN cat /var/runtime/index.js


CMD ["src/_proxy.handler"]
# ENTRYPOINT [ "node","src/index.js" ]
# ENTRYPOINT [ "/usr/bin/env","bash" ]
