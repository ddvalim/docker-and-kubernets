# Especificar a imagem base. Ela precisa conter o runner do Javascript!
# O termo alpine eh uma tag que especifica a menor versao possivel da imagem
# especificada
FROM node:alpine

# Define o diretorio do servidor no container
WORKDIR /home/node/app

# Copiar os arquivos de dependencia para dentro do container
COPY ./package.json /home/node/app

# Instalar dependencias
RUN npm install

# Copiar os arquivos do diretorio para dentro do container
COPY ./ /home/node/app

# Comando de inicializacao
CMD ["npm", "start"]

# Para acessar o servico em execucao dentro do container, precisamos mapear 
# As portas do container para as portas da maquina host, porque todo container
# eh isolado em nivel de rede. Isso pode ser feito na execucao do comando docker run
# ou definido no dockerfile com o comando EXPOSE.

# docker run -p 8080:8080 <image name>
