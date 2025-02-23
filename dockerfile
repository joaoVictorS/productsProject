# Usa a imagem oficial do Node.js 18
FROM node:18

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos do projeto para dentro do contêiner
COPY package.json package-lock.json ./

# Instala as dependências do projeto
RUN npm install

# Copia o restante do código-fonte para dentro do contêiner
COPY . .

# Expõe a porta do Vite
EXPOSE 5173

# Define a variável de ambiente do host
ENV HOST=0.0.0.0

# Comando para rodar o projeto
CMD ["npm", "run", "dev"]
