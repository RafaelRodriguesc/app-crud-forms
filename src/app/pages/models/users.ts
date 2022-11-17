export class Users {
  "nome": string = '';
  "telefone": dadosTelefone = new dadosTelefone;
  "endereco": dadosEndereco = new dadosEndereco;
  "email": string = '';
  "senha": string = '';
  "acesso": string = ''
}

export class dadosTelefone {
  "residencial": string = '';
  "celular": string = ''
}

export class dadosEndereco {
  "cep": string = '';
  "logradouro": string = '';
  "bairro": string = '';
  "cidade": string = '';
  "estado": string = ''
}
