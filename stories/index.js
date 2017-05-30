import React from 'react';

import { I18nextProvider } from 'react-i18next';
import i18n from '../src/i18n'; // initialized i18next instance

// addons.js
import '@kadira/storybook/addons';
import registerScissors, { defaultDevices } from 'storybook-addon-scissors';

import { storiesOf, action, addDecorator } from '@kadira/storybook';

import Item from '../src/components/Item';
import ItemList from '../src/components/ItemList';
import Login from '../src/components/Login';
import Register from '../src/components/Register';

registerScissors(defaultDevices);

const LanguageDecorator = (story) => (
  <I18nextProvider i18n={i18n}>
    {story()}
  </I18nextProvider>
);
addDecorator(LanguageDecorator);

storiesOf('Item', module)
  .add('single item', () => {
    i18n.changeLanguage("en");
    const item = {
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    };
    return (
      <Item
      {...item} />
    );
  });


storiesOf('Itemlist', module)
  .add('empty en', () => {
    i18n.changeLanguage("en");
    const itemList = [];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList empty')}
      loaded={true}/>
    );
  })
  .add('empty it', () => {
    i18n.changeLanguage("it");
    const itemList = [];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList empty')}
      loaded={true}/>
    );
  })
  .add('with one item', () => {
    i18n.changeLanguage("en");
    const itemList = [{
      uuid: 'ert534534wertwert',
      name: 'Placeat voluptates repellendus veniam.',
      description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
      price: 233.34,
      pictureUrl: null
    }];
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList with one item')}
      loaded={true}/>
    );
  })
  .add('with many items', () => {
    i18n.changeLanguage("en");
    const itemList = [];

    for (let i = 0; i < 9; i++) {
      const item = {
        uuid: 'ert534534wertwert',
        name: 'Placeat voluptates repellendus veniam.',
        description: 'Deserunt ut quae architecto error assumenda exercitationem occaecati.',
        price: 233.34,
        pictureUrl: null
      };
      item.item_id = item.item_id + i;
      itemList.push(item);
    }
    return (
      <ItemList
      itemList={itemList}
      fetchItemList={action('fetch ItemList with one item')}
      loaded={true}/>
    );
  });

storiesOf('Login', module)
  .add('empty login it', () => {
    i18n.changeLanguage("it");
    const error = '';
    return (
      <Login
      lng="it"
      error={error}
      login={action('call to login')} />
    );
  })
  .add('empty login en', () => {
    i18n.changeLanguage("en");
    const error = '';
    return (
      <Login
      error={error}
      login={action('call to login')} />
    );
  })
  .add('bad credentials', () => {
    i18n.changeLanguage("en");
    const error = 'login_error';
    return (
      <Login
      error={error}
      login={action('call to login')} />
    );
  });

storiesOf('Register', module)
  .add('empty form en', () => {
    i18n.changeLanguage("en");
    const error = {};
    return (
      <Register
      error={error}
      register={action('call to register')} />
    );
  })
  .add('empty form it', () => {
    i18n.changeLanguage("it");
    const error = {};
    return (
      <Register
      error={error}
      register={action('call to register')} />
    );
  })
  .add('form with first name empty and email not correct', () => {
    i18n.changeLanguage("en");
    const error = {
      details: [{
        field: 'first_name',
        error: 'empty'
      },{
        field: 'email',
        error: 'invalid'
      }]
    };
    return (
      <Register
      error={error}
      register={action('call to register')} />
    );
  });
