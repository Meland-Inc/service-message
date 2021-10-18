# Service Messages

用于后端微服务通信.

通过typescript ->生成 json schema.

然后再通过 json schema 生成其他语言（当前支持typescript｜golang）的Structs。


# commands

### build
> 生成最新的json schema
```
yarn run build
```

### build-struct
> 生成其他语言的 struct
```
yarn run build-struct
```

### publish