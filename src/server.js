import React from 'react'
import ReactDOMServer from 'react-dom/server';
import MailLayout from './mail_layout';
import express from 'express';
import juice from 'juice';

const mailHtmlLayout = (body)=> {
  return `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <link rel="stylesheet" href="./App.css">
      <style>
        body {
          background-color: purple;
        }
        #footer {
          color: #400;
        }
      </style>
    </head>
    <body>
      ${body}
    </body>
  </html>`
}

const server = express();
server.set('port', (process.env.PORT || 8887));

server.use(express.json());

server.post('/mail/:mailname', (req, res) => {
  const el =  React.createElement(MailLayout(req.params.mailname), req.body)
  let html = ReactDOMServer.renderToStaticMarkup(el)
  html = mailHtmlLayout(html)
  html = juice(html)
  res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.set('Pragma', 'no-cache');
  res.set('Expires', '0');
  res.json({html});


});


server.listen(server.get('port'), () => {
  console.log('Node server is running on port', server.get('port'));
});


