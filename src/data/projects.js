import mk1 from '../assets/mk1.png';
import mk2 from '../assets/mk2.png';
import mk3 from '../assets/mk3.png';

const projects = [{
        img: mk1,
        projectIndex: 1,
        name: 'TaskEasy',
        description: 'Secured Todo App',
        url: 'https://www.youtube.com/embed/-jcvJi0UmZg?si=OSd2n4gP2_oN8SLV',
        moreinfo: `
        <h2>About The Project</h2>
        <p>Link to GitHub Code Repository: <a href="http://github.com/PrathamPatel010/TaskEasy">View Code</a></p>
        <h3>Tech Stack</h3>
        <ul>
            <li>React JS for frontend</li>
            <li>MongoDB for database</li>
            <li>Express JS for backend</li>
            <li>Node.js as Runtime Environment</li>
            <li>JWT For Authentication</li>
            <li>bcrypt for password-encryption</li>
        </ul>
        <h3>Flow & Features</h3>
        <ul>
            <li>User will have to register first with username & password.</li>
            <li>Then user can log-in with their credentials</li>
            <li>On the main page of app user can add todos, mark todos as done,delete todos when they want</li>
            <li>Users are given option to logout as well</li>
            <li><b>No User can access the main page of app without being logged in</b></li>
        </ul>
        <p>For More Information, you can visit GitHub code repository.</p>`
    },
    {
        img: mk2,
        projectIndex: 2,
        name: 'QuickShare',
        description: 'Secured File Sharing',
        url: 'https://www.youtube.com/embed/v6YkTAhPPVI?si=KW_4G9obm51UPDbV',
        moreinfo: `
        <h2>About The Project</h2>
        <p>Link to GitHub Code Repository: <a href="http://github.com/PrathamPatel010/File-Sharing-App">View Code</a></p>
        <h3>Tech Stack</h3>
        <ul>
            <li>HTML,CSS,JS,EJS for frontend</li>
            <li>MongoDB for database</li>
            <li>Express JS for backend</li>
            <li>Node.js as Runtime Environment</li>
            <li>bcrypt for password-encryption</li>
        </ul>
        <h3>Flow & Features</h3>
        <ul>
            <li>First, user will select the file which they want to share and set password for that</li>
            <li>Then user will click share button after which file will be sent to backend for processing</li>
            <li>After the file is uploaded, it will display success message and downloadlink</li>
            <li>User can share this download link with anyone</li>
            <li>Now Anyone with the link & correct password can download the file</li>
        </ul>
        <p>For More Information, you can visit GitHub code repository.</p>`,
    },
    {
        img: mk3,
        projectIndex: 3,
        name: 'SpendWise',
        description: 'Advanced Expense Tracking',
        url: '',
        moreinfo: `
        <h1>Youtube video will be added soon</h1>
        <h2>About The Project</h2>
        <p>Link to GitHub Code Repository: <a href="http://github.com/PrathamPatel010/Money-Tracking-App">View Code</a></p>
        <h3>Tech Stack</h3>
        <ul>
            <li>React JS for frontend</li>
            <li>MongoDB for database</li>
            <li>Express JS for backend</li>
            <li>Node.js as Runtime Environment</li>
            <li>Passport.js for Google OAuth 2.0</li>
            <li>JWT For Login Authentication</li>
            <li>bcrypt for password-encryption</li>
        </ul>
        <h3>Flow & Features</h3>
        <ul>
            <li>User will first sign-up using their google id & setup their password</li>
            <li>Now, this email & password will be used for login</li>
            <li>On Mainpage, user can add new transaction with details like amount,date & time,expense description</li>
            <li>Users are given option to clear all transactions as well</li>
            <li>Logout functionality is also provided.</li>
            <li><b>No User can access main page of app without login</b></li>
        </ul>
        <p>For More Information, you can visit GitHub code repository.</p>`,
    },
];

export default projects;