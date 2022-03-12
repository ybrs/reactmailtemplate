import React, {createElement} from 'react';
import config from './mail_config'
import Header from './header';
import Footer from './footer';
// var styliner = new Styliner(__dirname + '/html');



const MailLayout = (name) => (props) => {
    const mailEl = createElement(config[name].component, props || config[name].context);

    return (
      <table>
        <tbody>
        <tr><td>
            <Header />
            {mailEl}
            <Footer />      
          </td></tr>
          </tbody>
      </table>
    )      
  }

  export default MailLayout;