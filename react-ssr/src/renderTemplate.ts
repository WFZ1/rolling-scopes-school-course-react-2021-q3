import ITemplateParams from './types/template-params.type';

export default function renderTemplate({
  cssPath,
  jsPath,
  content = '',
  data = '',
}: ITemplateParams): string {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>React SSR</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/client/${cssPath}">
      </head>
      <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${content}</div>

        <script type="application/json" id="data">${data.replace(
          /</g,
          '&lt;',
        )}</script>
        <script src="/client/${jsPath}"></script>
      </body>
    </html>`;
}
