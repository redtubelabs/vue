<p align="center">
  <h3 align="center">Vue Redtube</h3>
  <p align="center">Touch yourself on the Vue way</p>

  <p align="center">
  <a href="http://standardjs.com/">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </a>
  </p>
</p>

---

<img src="screenshots/1.png" />
<img src="screenshots/2.png" />
<img src="screenshots/3.png?v=2" />
<img src="screenshots/4.png" />


### Usage

If you use docker, just go 

``` sh
$ docker build -t vue-redtube . 
$ docker run -it -p 4000:4000 vue-redtube npm run proxy
$ docker run -it -p 8080:8080 vue-redtube vue serve
```

If you'd rather use Docker Compose, just go

``` sh
$ docker-compose up
```

Or if you like it raw, ( ͡° ͜ʖ ͡°), just go

```sh
$ npm install
$ npm start
```
