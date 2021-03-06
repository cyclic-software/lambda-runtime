# Lambda Runtime

A custom runtime for hosting cyclic apps.

## Running/Testing

### Local node

```sh
node start
curl -i -XPUT --header "Content-Type: application/json" --data '{"account":"xyz"}' https://localhost:3000
```

### Local Docker

```sh
docker build --no-cache -t myfunction:latest . && docker run -p 9000:8080 myfunction:latest
curl -i -XPOST "http://localhost:9000/2015-03-31/functions/function/invocations" -d @../lambda-runtime/sample-event.json
```

Prune: `docker container prune`

### SAM Build (like pipeline)

```sh
sam build --use-container
sam local
```

### Release

```sh
git push
git push -f --tags refs/tags/stable:refs/tags/stable
```
