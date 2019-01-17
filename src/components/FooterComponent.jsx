import React from 'react';
import { SocialIcon } from 'react-social-icons';

const FooterComponent = () => {
    return (
        <div className="footer">
            <span>
                <SocialIcon url="https://www.linkedin.com/in/j-miguel-gomez-melendez/" />
            </span>
            <span>
                <SocialIcon url="https://github.com/AsterDecember" />
                </span>
        </div>
    );
}

export default FooterComponent;
