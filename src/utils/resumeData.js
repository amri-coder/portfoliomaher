import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

export default {
    name:'Amri Maher',
    title :'Développeur Web',
    birthday : '26 Août',
    email: 'amri.maher@yahoo.com',
    job:'Freelance',

socials: {
    facebook : {
        link:"https://www.facebook.com",
        text: "MonFacebook",
        icon: <FacebookIcon />,
    },
    twitter : {
        link:"https://www.twitter.com",
        text: "MonTwitter",
        icon: <TwitterIcon />,
    },
    linkedIn : {
        link:"https://www.linkedin.com/in/maher-amri-302228187/",
        text: "MonLinkedIn",
        icon: <LinkedInIcon />,
    },
    github : {
        link:"https://github.com/amri-coder",
        text: "MonGitHub",
        icon: <GitHubIcon />,
    },
},
};