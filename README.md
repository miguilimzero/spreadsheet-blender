# Spreadsheet Blender

Spreadsheet blender é um programa desenvolvido em Electron durante a aula de Atividade de Integração Curricular 2 do curso de Sistemas de Informação no C3 da FURG.

Esse programa tem como objetivo facilitar a mesclagem de diferentes tabelas CSV e Excel, apartir de uma coluna principal, que podem conter erros e pequenas diferenças.
O programa utiliza do algorítimo de Levenshtein para fazer a mesclagem, podendo configurar a diferença maxima entre os valores das tabelas.

## Tecnologias utilizadas

Para o desenvolvimento do projeto, foram utilizadas as seguintes principais tecnologias:

-   Node.js
-   Electron
-   Vue.js
-   Tailwind CSS

Tambem foi utilizado a ferramenta [Prettier](https://prettier.io/) com a extensão de [Ordenação de classes](https://tailwindcss.com/blog/automatic-class-sorting-with-prettier)
da Tailwind CSS para uma melhor padronização dos arquivos.

Tambem foi utilizada a fonte [heroIcons](https://heroicons.com/) para todos os ícones utilizados no projeto. Com exceção das bandeiras, que nesse caso,
foi utilizado o [Pack de bandeiras arredondadas](https://www.flaticon.com/packs/countrys-flags) disponibilizado pelo Flaticon.

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

Para compilar e empacotar o programar para distribuição, você deve ter em mente para qual sistema operacial você está querendo fazer isso.
O comando de compilação padrão, vai compilar para o sistema que você esta rodando no seu computador atual:

```bash
npm run electron:build
```

Agora se você quer compilar para outros sistemas operacionais, abaixo estão listados os comandos necessários para os 3 principais:

**Linux:**

```bash
npm run electron:build-linux
```

**Mac OS:**

```bash
npm run electron:build-macos
```

**Windows:**

```bash
npm run electron:build-windows
```

## Como contribuir

Obrigado por considerar contribuir para o projeto. Todas as diretrizes de contribuição são mencionadas [aqui](CONTRIBUTING.md).

## Licença

Spreadsheet Blender é um software de código aberto licenciado sob a licença [MIT license](LICENSE).
