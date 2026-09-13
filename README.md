# Projeto Manifestando Bondade

Site estático (HTML, CSS e JavaScript), pronto para abrir no VS Code e publicar gratuitamente no GitHub Pages.

## Abrir e visualizar no VS Code

1. Instale o [VS Code](https://code.visualstudio.com/) e abra-o.
2. Clique em **File > Open Folder** e selecione esta pasta: `projeto-manifestando-bondade`.
3. No menu de extensões (ícone de quatro quadrados à esquerda), procure por **Live Server**, da Ritwick Dey, e clique em **Install**.
4. Abra `index.html` e clique em **Go Live**, no canto inferior direito do VS Code. O site abrirá no navegador, normalmente em `http://127.0.0.1:5500`.

Não é preciso instalar Node.js nem executar comandos para usar este site.

## Publicar no GitHub Pages

1. Crie uma conta em [GitHub](https://github.com/) caso ainda não tenha uma.
2. Clique no sinal **+** no canto superior direito e escolha **New repository**.
3. Dê o nome `projeto-manifestando-bondade`, escolha **Public** e clique em **Create repository**.
4. No VS Code, abra o menu **Source Control** (ícone de ramificação à esquerda), clique em **Initialize Repository**, escreva uma mensagem como `Primeira versão do site` e clique em **Commit**.
5. Clique em **Publish Branch**. Entre na sua conta do GitHub se o VS Code pedir e selecione o repositório criado.
6. No GitHub, abra o repositório e vá a **Settings > Pages**. Em **Build and deployment**, escolha **Deploy from a branch**. Selecione a branch `main`, a pasta `/(root)` e clique em **Save**.
7. Aguarde alguns minutos. O endereço aparecerá na própria página **Pages**, normalmente como `https://SEU-USUARIO.github.io/projeto-manifestando-bondade/`.

## Conectar ao Google Sheets depois

1. Crie uma planilha no Google Sheets e copie o ID presente na URL, entre `/d/` e `/edit`.
2. Em [Google Apps Script](https://script.google.com/), crie um projeto, cole o conteúdo de `Code.gs` e substitua `COLE_AQUI_O_ID_DA_SUA_PLANILHA` pelo ID copiado.
3. Clique em **Deploy > New deployment > Web app**. Escolha executar como você e acesso para quem precisa preencher o formulário. Autorize o projeto e copie a URL que termina em `/exec`.
4. Abra `script.js`, cole a URL entre as aspas de `GOOGLE_SHEETS_URL` e publique a alteração no GitHub pelo painel **Source Control** do VS Code.

> Enquanto a URL estiver vazia, o formulário funciona para demonstração e exibe a confirmação, mas não salva as respostas.

## Painel privado da equipe

Um responsável pode inscrever várias crianças, e cada criança fica em uma linha na aba `Respostas`.

Para criar o painel, use um **segundo** projeto no Google Apps Script: copie `PainelEquipe.gs` e `painel.html`, coloque o mesmo ID da planilha nos dois arquivos, compartilhe a planilha apenas com a equipe e publique esse segundo projeto como aplicativo da web com acesso restrito à equipe. Assim, os dados de menores não ficam expostos no site público.

## Arquivos

- `index.html`: conteúdo e campos do formulário.
- `style.css`: visual e adaptação para celular.
- `script.js`: etapas, validação e envio para Google Sheets.
- `Code.gs`: ponte entre o site e a planilha.
- `PainelEquipe.gs` e `painel.html`: painel privado para a equipe autorizada.
