# Usa Node LTS
FROM node:22-alpine

# Cria pasta da aplicação
WORKDIR /app

# Copia arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o resto do código
COPY . .

# Expõe porta
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "start"]
