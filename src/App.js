import React, { useEffect, useState, createElement } from 'react'
import Footer from './footer'
import Header from './header'
import config from './mail_config';
import { Link, Route } from "wouter";
import './App.css'
import MailLayout from './mail_layout';

function App(props) {
  const links =   Object.entries(config).map(([key, value])=>{
    const link = `/mail/${key}`;
    return <li key={key}><Link key={key} href={link} >{value.title}</Link></li>
  })

  return (
    <div>
      <ul id="links">
        {links}
        </ul>
    <hr color="red" />
    <Route path="/mail/:name">
      {(params) => MailLayout(params.name)()}
    </Route>
    </div>
  );
}

export default App;
