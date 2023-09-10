## Start Project

### nodeのversion

```bash
$ node -v
## 私はv18.12.0で動作確認をしました。
```


### envの設定
ルートに.envを配置してください。



```bash
## 下記はサンプルです。
DATABASE_URL="postgresql://nest_sample_user:nest_sample_password@localhost:5432/nest_sample?schema=public"
## 実際にはhash化した文字列を入れましょう。
JWT_SECRET="jwt-secret" 

```


```bash
## postgresqlを起動する。
$ docker compose up
$ yarn install
$ yarn start:dev
```

### データベースをGUIで確認

```bash
$ npx prisma studio
```