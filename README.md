# Minecraft Extremo 2022 (es)
Este proyecto contiene los ficheros necesarios para generar una página web estática con motivo del evento de streamers hispanohablantes "Minecraft Extremo".
En ella se muestra una lista con todos los participantes, enlaces a sus canales, el número de vidas restantes y enlaces a sus muertes recientes.

El resultado es accessible a través de el siguiente enlace: [Minecraft Extremo 2022](https://chipironcin.github.io/minecraftextremosummary2022/).

## Tecnologías
El proyecto usa las siguientes tecnologías:
* HTML5
* CSS3
* Handlebars
* Github Actions

La página principal se encuentra definida en el archivo `index.html`, que se genera a partir del modelo index.hbl y de los datos contenidos en el fichero `data.json`.

Cada vez que se realiza un commit a la rama "main" de este repositorio, se ejecuta una acción que renderiza el modelo y crea un commit nuevo con el resultado.

## Cómo contribuir a mantener la web actualizada
Si quieres contribuir a mantener las vidas de los streamers actualizadas cada día tan solo tienes que editar el archivo `data.json` con los nuevos datos y crear una Pull Request.

-----------------------------------------------------------

# Minecraft Extremo 2022 (en)
This project contains the necessary files to generate a static web page for the Spanish-speaking streamers event "Minecraft Extremo".
It displays a list with all the participants, links to their channels, the number of lives remaining and links to their recent deaths.

The result is accesible through the following link: [Minecraft Extremo 2022](https://chipironcin.github.io/minecraftextremosummary2022/).

The project uses the following technologies:
* HTML5
* CSS3
* Handle bars
* Github Actions

The home page is defined in the `index.html` file, which is generated from the index.hbl model and the data contained in the `data.json` file.

Every time a commit is made to the "main" branch of this repository, an action is executed that renders the model and creates a new commit with the result.

## How to help keep the website up to date
If you want to help keep streamers' lives updated every day, just edit the `data.json` file with the new data and create a Pull Request.
