export class Clientes {
  "nome": string = '';
  "telefone": dadosTelefone = new dadosTelefone;
  "email": string = '';
  "endereco": dadosEndereco = new dadosEndereco;
  "documentos": dadosDocumento = new dadosDocumento
}

export class dadosTelefone {
  "residencial": string = '';
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
  "rg": string = ''
}
