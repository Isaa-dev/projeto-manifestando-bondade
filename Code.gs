// Projeto 1: recebe os envios públicos do formulário.
const SPREADSHEET_ID = "1_laILpArIlW6srv1LK5NPpqFImlS3OS6UnRWOPmbpDE";
const SHEET_NAME = "Respostas";
function doPost(e) {
  const dados = JSON.parse(e.postData.contents);
  const planilha = SpreadsheetApp.openById(SPREADSHEET_ID);
  const aba = planilha.getSheetByName(SHEET_NAME) || planilha.insertSheet(SHEET_NAME);
  if (aba.getLastRow() === 0) aba.appendRow(["Data e hora", "Responsável", "Telefone", "Parentesco", "Endereço", "Nome da criança", "Nascimento", "Idade", "Gênero", "Saúde", "Observações", "Tamanho da roupa", "Número do calçado"]);
  dados.criancas.forEach(crianca => aba.appendRow([new Date(), dados.responsavel, dados.telefone, dados.parentesco, dados.endereco, crianca.nome, crianca.nascimento, crianca.idade, crianca.genero, crianca.saude, crianca.observacoes, crianca.tamanhoRoupa, crianca.tamanhoCalcado]));
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
