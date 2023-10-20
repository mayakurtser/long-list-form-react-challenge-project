import React from 'react';
import { Link } from 'react-router-dom';
import { Display, Text, TYPOGRAPHY_SIZES, TYPOGRAPHY_WEIGHTS } from '@common/Typography';
import colors from '@common/styles/colors.module.scss';
import classes from './NotFound.module.scss';

const NotFound = () => (
  <div className={classes.container}>
    <Display value='Page not found...'
             size={TYPOGRAPHY_SIZES.SM} weight={TYPOGRAPHY_WEIGHTS.MEDIUM} />
    <Text
      size={TYPOGRAPHY_SIZES.XL}
      weight={TYPOGRAPHY_WEIGHTS.REGULAR}
      color={colors.gray600}
      value='We searched high and low, but couldn’t find what you’re looking for. Let’s find a better place for you to
        go.' />
    <Link to='/'>
      Go Home
    </Link>
  </div>
);

export default NotFound;