import React from 'react';

import ThankYouIcon from '../../../../assets/icon-thank-you.svg';

import classes from './style.module.scss';

export default function ThankYou() {
  return (
    <div className={classes.contentContainer}>
      <img src={ThankYouIcon} />
      <h1>Thank you!</h1>
      <p>Thanks for confirming your subscription! We hope you have fun using out platform.
        If you ever need support, please feel free to email us at support@loremgaming.com.
      </p>
    </div>
  )
}
