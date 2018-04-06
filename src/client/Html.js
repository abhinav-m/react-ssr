const Html = ({ title, body, styles }) => `
    <DOCTYPE !html>
    <html>
    <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${styles}    
    </head>
    <body>
    ${body}
    </body>
    </html>`;

export default Html;
