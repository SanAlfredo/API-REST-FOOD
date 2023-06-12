# API-REST-FOOD
Luego de clonar el archivo entrar a la terminal dentro de la carpeta raiz y usar: npm init -y

Instalar las dependencias con:
npm install express sequelize mysql2 nodemon bcryptjs dotenv jsonwebtoken

Si se desea usar los seeders (semillas para llenar la base de datos) instalar: npm install faker -D

Configurar el package.json:
    * Dentro de Scripts colocar: "dev":"nodemon index.js"
    * Antes de los Scripts colocar: "type":"module"

Para correr el programa: npm run dev

Para correr los seeders, se debe tener instalado sequelize como una variable global: 
    * npm install -g sequelize
    * npm install -g sequelize-cli

Ademas agregar sequelize al path de windows

Entonces para correr los seeders usar el comando:
    sequelize db:seed:all
con esto tendremos la base de datos con algunos datos de prueba en categorias, productos, personas, usuarios,roles (categories,products, people, users,roles)
