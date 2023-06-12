# API-REST-FOOD
Luego de clonar el archivo entrar a la terminal dentro de la carpeta raiz y usar: npm init -y

Instalar las dependencias con:
npm install express sequelize mysql2 nodemon bcryptjs dotenv jsonwebtoken

Si se desea usar los seeders (semillas para llenar la base de datos) instalar: npm install faker -D

Configurar el package.json:
    * Dentro de Scripts colocar: "dev":"nodemon index.js"
    * Antes de los Scripts colocar: "type":"module"

Antes de hacer correr el programa crear un archivo a la altura del package.json con el nombre .env el cual deberá tener los siguientes datos:
    * MYSQL_HOST= 127.0.0.1
    * MYSQL_USER= root
    * MYSQL_PASSWORD=""
    * MYSQL_DB= prueba_restaurante
    * MYSQL_dialect= "mysql"
    * MYSQL_pool= {
        max= 5,
        min= 0,
        acquire= 30000,
        idle= 10000,
        }
Para correr el programa: npm run dev

Para correr los seeders, se debe tener instalado sequelize como una variable global: 
    * npm install -g sequelize
    * npm install -g sequelize-cli

Ademas agregar sequelize al path de windows

Entonces para correr los seeders primero se debe configurar el archivo config.json dentro de la carpeta config, colocar las variables correspondientes a su base de datos luego usar el comando:
    sequelize db:seed:all
con esto tendremos la base de datos con algunos datos de prueba en categorias, productos, personas, usuarios,roles (categories,products, people, users,roles)
