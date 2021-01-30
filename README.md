# Lambda Runtime

A custom runtime for hosting cyclic apps.

```sh
docker build --no-cache -t myfunction:latest . && docker run -p 9000:8080 myfunction:latest
curl -i -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d '{}'
```

Prune: `docker container prune`
