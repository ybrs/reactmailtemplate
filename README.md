###

This is a basic example of how to render html from react for sending emails.

This setup includes: 
- react, react-dom
- juice - for css rendering for emails
- wouter - for routing

# Install and run

```
npm i
```

then run api and react server with

```
npm run dev
```

You can see the rendered templates with visiting 

```
http://localhost:3000/
```

on your favorite browser.

To see api response in action 

```
$ http -v POST http://localhost:8887/mail/mail_beginner_user username=foobar
POST /mail/mail_beginner_user HTTP/1.1
Accept: application/json, */*;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Content-Length: 22
Content-Type: application/json
Host: localhost:8887
User-Agent: HTTPie/3.2.1

{
    "username": "foobar"
}


HTTP/1.1 200 OK
Cache-Control: no-cache, no-store, must-revalidate
Connection: keep-alive
Content-Length: 563
Content-Type: application/json; charset=utf-8
Date: Thu, 02 Jun 2022 22:03:53 GMT
ETag: W/"233-99nUlR2YbawhJACGyML71MFUllw"
Expires: 0
Keep-Alive: timeout=5
Pragma: no-cache
X-Powered-By: Express

{
    "html": "<!DOCTYPE html>\n  <html lang=\"en\" xmlns=\"http://www.w3.org/1999/xhtml\">\n    <head>\n      <link rel=\"stylesheet\" href=\"./App.css\">\n      \n    </head>\n    <body style=\"background-color: purple;\">\n      <table><tbody><tr><td><div class=\"header\">Hello<hr></div><div>Hello foobar, You have been using our site for the last 2 weeks. Checking if everything is allright</div><div id=\"footer\" style=\"color: #400;\">OurWebsite | Copyright | <a href=\"/\">Click here to unsubscribe</a></div></td></tr></tbody></table>\n    </body>\n  </html>"
}
```

In case you are curious about the perf. of the rendering, you can visit

```
k6 run -d 10s -u 100 loadtest.js
```

This roughly responds with 4k reqs/sec, on an unoptimized macbook air with pycharm and vscode and 100 tabs on chrome running. So should be a bit more faster on a server.

```
$ k6 run -d 10s -u 100 loadtest.js


          /\      |‾‾| /‾‾/   /‾‾/
     /\  /  \     |  |/  /   /  /
    /  \/    \    |     (   /   ‾‾\
   /          \   |  |\  \ |  (‾)  |
  / __________ \  |__| \__\ \_____/ .io

  execution: local
     script: loadtest.js
     output: -

  scenarios: (100.00%) 1 scenario, 100 max VUs, 40s max duration (incl. graceful stop):
           * default: 100 looping VUs for 10s (gracefulStop: 30s)


running (10.0s), 000/100 VUs, 40328 complete and 0 interrupted iterations
default ✓ [======================================] 100 VUs  10s

     ✓ status is 200

     checks.........................: 100.00% ✓ 40328       ✗ 0
     data_received..................: 36 MB   3.5 MB/s
     data_sent......................: 7.1 MB  712 kB/s
     http_req_blocked...............: avg=6.88µs  min=0s      med=0s      max=3.7ms    p(90)=1µs     p(95)=1µs
     http_req_connecting............: avg=4.72µs  min=0s      med=0s      max=2.28ms   p(90)=0s      p(95)=0s
     http_req_duration..............: avg=24.78ms min=16.57ms med=22.48ms max=127.07ms p(90)=30.15ms p(95)=41.39ms
       { expected_response:true }...: avg=24.78ms min=16.57ms med=22.48ms max=127.07ms p(90)=30.15ms p(95)=41.39ms
     http_req_failed................: 0.00%   ✓ 0           ✗ 40328
     http_req_receiving.............: avg=11.22µs min=7µs     med=10µs    max=917µs    p(90)=13µs    p(95)=15µs
     http_req_sending...............: avg=3.52µs  min=2µs     med=3µs     max=431µs    p(90)=4µs     p(95)=5µs
     http_req_tls_handshaking.......: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
     http_req_waiting...............: avg=24.76ms min=16.56ms med=22.47ms max=127.04ms p(90)=30.13ms p(95)=41.38ms
     http_reqs......................: 40328   4023.784309/s
     iteration_duration.............: avg=24.81ms min=16.61ms med=22.51ms max=127.1ms  p(90)=30.18ms p(95)=41.43ms
     iterations.....................: 40328   4023.784309/s
     vus............................: 100     min=100       max=100
     vus_max........................: 100     min=100       max=100

```
