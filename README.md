# Spreadsheet Blender

Spreadsheet blender é um programa feito em Electron durante a aula de Atividade de Integração Curricular 2 do curso de Sistemas de Informação na FURG.

Esse programa tem como objetivo facilitar a mesclagem de diferentes tabelas CSV e Excel, apartir de uma coluna principal, que podem conter erros e pequenas diferenças.
O programa utiliza do algorítimo de Levenshtein para fazer a mesclagem, podendo configurar a diferença maxima entre os valores das tabelas.

## Tecnologias utilizadas

Para o desenvolvimento do projeto, foram utilizadas as seguintes principais tecnologias:

- Electron
- Vue.js
- Tailwind CSS

Tambem foi utilizado a ferramenta [Prettier](https://prettier.io/) com a extensão de [Ordenação de classes](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier) 
da Tailwind CSS para uma melhor padronização dos arquivos. 

Tambem foi utilizada a fonte [heroIcons](https://heroicons.com/) para todos os ícones utilizados no projeto.

## Fazer setup do projeto

Para fazer setup do projeto primeiro faça `git clone` do repositório e instale as dependências NPM.


```bash
git clone https://github.com/srdante/aic-trabalho
```

```bash
cd aic-trabalho
npm install
```

Após essa instalação inicial, você iniciar um processo local para modificar o projeto e ver as mudanças do código acontecendo em tempo real (Hot Reload):

```bash
npm run electron:serve
``` 

## Compilar para distribuição


## Como contribuir

Obrigado por considerar contribuir para o Spreadsheet Blender. Todas as diretrizes de contribuição são mencionadas [aqui](CONTRIBUTING.md).

## Licença

Spreadsheet Blender é um software de código aberto licenciado sob a licença [MIT license](LICENSE).