# Micro 

This document is intended to provide some background on Zeit's micro and how we have implemented it in our application.  Micro is a lightweight server written in NodeJS.  Additional information can be found at https://github.com/zeit/micro and https://zeit.co/blog/micro-8.

Our motivation for using micro is to enable "microservices", such as user payments.  Essentially, we build a mini server to handle payments through Stripe.  Micro's benefits include: 

![Micro Features](img/micro_benefits.jpg)

We are using continuous deployment through Now, a command line tool (more on setting up Now:  https://zeit.co/now#get-started).

## Getting Started with Micro

Micro is only meant to be use in production.  In development, we use micro-dev which will aid us in building microservices.

```bash
$ npm install --save micro
```

After installation, we then need to create a server.js file and export a function that accepts standard incoming messages and server responses. 

```js
module.exports = (req, res) => {
  res.end('Welcome to Micro')
}
```
More about helper functions available with Micro: https://github.com/zeit/micro#body-parsing



