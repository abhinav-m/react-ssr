import { renderToString } from 'react-dom/server';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';
import express from 'express';

import App from './client/App';
import Html from './client/Html';

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();

  const body = renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const title = 'SSR';

  res.send(
    Html({
      body,
      styles,
      title
    })
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
