export class Fornecedores {
  "nome": string = '';
  "telefone": dadosTelefone = new dadosTelefone;
  "email": string = '';
  "website": string = '';
  "endereco": dadosEndereco = new dadosEndereco;
  "documentos": dadosDocumento = new dadosDocumento
}

export class dadosTelefone {
  "comercial": string = '';
  "celular": string = ''
}

export class dadosEndereco {
  "cep": string = '';
  "logradouro": string = '';
  "bairro": string = '';
  "cidade": string = '';
  "estado": string = ''
}

export class dadosDocumento {
  "cnpj": string = '';
  "inscricao": string = ''
}


