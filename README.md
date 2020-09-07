## Serviço de Busca de Cep

A aplicação desenvolvida em Node.js para realização do backend, e ReactJs para a criação e manipulação de componente do frontend e utilizando os padrão de arquitetura de software MVC(Model View Controller).

Após realizar o download do projeto é necessário realizar a instalação dos frameworks e libs utilizadas, entrar dentro das duas pastas (backend e frontend) e realizar os comandos de acordo com o gerenciador de pacote instalado (npm instal ou yarn install).

Ao termino das instalações dos pacotes necessários, deve-se startar o backend dentro da pasta backend(npm start ou yarn start) a aplicação ira atuar em http://localhost:3001.
Para o frontend é necessario entrar na pasta frontend e realizar o mesmo procedimento porém ele irá atuar em http://localhost:3000.

Após o backend e o frontend em execução, dentro do navegador de preferência acessar http://localhost:3000 e clicar em Buscar Cep conforme imagem:

<img src="https://github.com/matheus-moizeis/busca_cep/blob/master/backend/public/images/im1.png" alt="drawing" width="550"/>

Logo após o click será direcinado ao formulario, inserir o cep no campo Cep:

<img src="https://github.com/matheus-moizeis/busca_cep/blob/master/backend/public/images/img3.png" alt="drawing" width="550"/>


Inserção finalizada, ao sair do input Cep, será realizada uma solicitação(get) ao http://localhost:3001/cep/(cep informado no input Cep) e com o retorno da api os demais campos serão preenchidos.

<img src="https://github.com/matheus-moizeis/busca_cep/blob/master/backend/public/images/img4.png" alt="drawing" width="550"/>
