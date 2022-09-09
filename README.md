# Assignment 1 - Respond to POST requests
# $\textcolor{green}{\text{Assignment 1 -}}$ Respond to POST requests

After getting Wrangler and Github set up; we’ve seen how to access the URL  property of an incoming request and do conditional logic based on it.
In https://developers.cloudflare.com/workers/runtime-apis/request/ you can see that there are many other properties of the request which you can access.

Using the examples shown here, and the Request documentation, update your Hello Worker template so that is gives a different response for requests with a POST method.
Bonus points if you make it response in a JSON format, as is often useful for POST requests
Place your completed assignment in your Github repository








# Template: worker

A simple template for kick starting a Cloudflare worker project.

## Setup

To create a `my-project` directory using this template, run:

```sh
$ npm init cloudflare my-project worker
# or
$ yarn create cloudflare my-project worker
# or
$ pnpm create cloudflare my-project worker
```

> **Note:** Each command invokes [`create-cloudflare`](https://www.npmjs.com/package/create-cloudflare) for project creation.
