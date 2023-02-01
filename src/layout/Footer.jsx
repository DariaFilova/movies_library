import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="page-footer indigo accent-2">
                <div className="footer-copyright">
                    <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                    </div>
                </div>
        </footer>
        </div>
    );
};

export default Footer;