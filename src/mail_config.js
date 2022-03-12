import MailBeginnerUser from "./mail_templates/mail_beginner_user";
import WelcomeMail from "./mail_templates/mail_welcome";

const config = {
    mail_welcome: {
        title: "Welcome mail",
        component: WelcomeMail,
        context: {
            username: "foobar"
        }
    },
    mail_beginner_user: {
        title: "After registration",
        component: MailBeginnerUser,
        context: {
            username: "foobar"
        }
    },

}

export default config;