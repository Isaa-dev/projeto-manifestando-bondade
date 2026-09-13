// Projeto 2: painel privado. Crie OUTRO projeto no Google Apps Script e cole este arquivo.
// Compartilhe a planilha somente com a equipe e publique este projeto apenas para ela.
const SPREADSHEET_ID = "1_laILpArIlW6srv1LK5NPpqFImlS3OS6UnRWOPmbpDE";
const SHEET_NAME = "Respostas";
function doGet() { const aba = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME); const valores = aba ? aba.getDataRange().getDisplayValues() : []; const cabecalhos = valores.shift() || []; const modelo = HtmlService.createTemplateFromFile("painel"); modelo.linhas = valores.map(linha => Object.fromEntries(cabecalhos.map((cabecalho, i) => [cabecalho, linha[i]]))); return modelo.evaluate().setTitle("Painel da Equipe | Manifestando Bondade"); }
