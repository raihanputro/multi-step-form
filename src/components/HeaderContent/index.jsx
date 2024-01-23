import React from 'react';

import classes from './style.module.scss';

export default function HeaderContent({ title, desc }) {
  return (
    <div className={classes.headerContainer}>
        <h1>{title}</h1>
        <p>{desc}</p>
    </div>
  )
}
