/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import Header from 'components/Header';
import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';

export default function LoyaltyPage() {
  return (
    <div>
      <Helmet>
        <title>Loyalty Page</title>
        <meta
          name="description"
          content="Loyalty page stuff"
        />
      </Helmet>
      <Header/>
      <H1>
        <FormattedMessage {...messages.header} />
      </H1>
      <List>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.scaffoldingHeader} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.scaffoldingMessage} />
          </p>
        </ListItem>
        <ListItem>
          <ListItemTitle>
            <FormattedMessage {...messages.bookNail} />
          </ListItemTitle>
          <p>
            <FormattedMessage {...messages.bookNailMessage} />
          </p>
        </ListItem>
      </List>
    </div>
  );
}
