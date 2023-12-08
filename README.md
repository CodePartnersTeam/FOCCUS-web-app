## Gestor de paquetes

Utilizamos `pnpm` como gestor de paquetes, si aun no lo tiene instalelo [aqui ↗️](https://pnpm.io/es/installation)

Consulte los scripts posibles lanzando en la terminal el comando `pnpm run`

## Arquitectura

La arquitectura que usamos en la aplicacion es **AHSS 7-1**, esta es una arquitectura pensada especificamente para NEXT JS con App Directory que encapsula principios como:

- SASS 7-1 Pattern
- Hexagonal Architecture
- Vertical Slice architecture
- Screaming Architecture
- _entre otros..._

Consulte mas informacion sobre esta arquitectura [aqui ↗️](https://github.com/devEstivenValencia/Architecure_AHSS_7-1)

_Extenderemos esto pronto..._

## Convenciones de trabajo

Las siguientes convenciones determinan el como debe escribirse codigo e interactuar con los compañeros mediante comentarios, Prs, Issues, etc.

### 🌎 Lenguaje

- #### **En Español:**

  Documentacion, titulos, descripciones, comentarios, commits, tasks, issues, discusiones y PRs.

- #### **En Ingles:**
  Ramas de trabajo, ademas de todo lo que sea codigo como variables, constantes, funciones, etc.

### Procesos

Al momento de codear cualquier logica, vista o componente se debe seguir el siguiente proceso:

![image](https://i.ibb.co/G302SwT/Step-by-step.png)

### Extensiones Vs Code

Se han recomendado una serie de extensiones utiles para el desarrollo, ademas de otras que son necesarias u obligatorias para el correcto funcionamiento.

#### Extensiones obligatorias

- [Prettier ↗️ ](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Eslint ↗️ ](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Auto Barrel ↗️ ](https://marketplace.visualstudio.com/items?itemName=mikehanson.auto-barrel)
- [stylelint ↗️ ](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [Better comments ↗️ ](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
- [Error lens ↗️ ](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
- [Bookmarks ↗️ ](https://marketplace.visualstudio.com/items?itemName=alefragnani.Bookmarks)
- [Live Share ↗️](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

Puede encontrar la lista completa en el archivo `extensions.json` dentro de `.vscode`. Puede hacer caso omiso de aquellas extensiones que no se encuentren en la lista de **extensiones obligatorias**, sin embargo recomendamos instalarlas todas para una mejor experiencia.

### Configuracion Compartida Vs Code

Cada Visual Studio Code puede ser unico y diferente.

Sabemos que esto puede generar conflictos al hacer PP o Code Reviews por lo que hemos estandarizado una serie de configuraciones para que todos estemos casi casi en la misma compu y asi entendamos todo a la perfeccion.

Esta configuracion se aplica automaticamente a Visual Studio Code y se encuentra en `settings.json` dentro de `.vscode`

### Commits:

Los commits deben seguir el conventional commit + gitmoji.

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://www.conventionalcommits.org/es/)
[![Gitmoji](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://gitmoji.dev)

Con esto la estructura seria la siguiente:

```TSX
prefijo(scope): :emoji: descripcion...

descripcion extensa...

referencias...
```

_ejemplos_

```TSX
chore(koji): ⭕ Configuracion base para Koji CLI

Configuramos Koji para usarlo como herramienta CLI en el proceso de commits

"re #1"
```

### Herramientas para Commits

Para ayudarnos en este proceso de construccion de commits podemos apoyarnos de alguna de las siguientes 2 herramientas:

1. **Koji:** Herramienta de linea de comandos.

   **Instalacion:**

   `curl -sS https://webinstall.dev/koji | bash`

   > _Siga las instrucciones que aparezcan en la terminal_

   **Uso:**

   Una vez instalado, ejecute en la terminal `koji` y vera la guia de terminal para crear commits.

   El archivo `.koji.toml` tiene la configuracion para CLI.

2. **Conventional Commits Extension:** Extension de Vs Code.

   Siga el siguiente articulo para instalar y aprender a usar la extension.

   [Link al articulo ↗️](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)

## Convenciones de codigo

### Estilos de la aplicacion ( CSS )

La siguiente lista especifica el estandar de formatos que pueden utilizarse para estilizar la aplicacion:

- Medidas pequeñas `px` (de 1 a max. 6 px) [explicacion ↗️](https://youtu.be/YglSzse9tEo)
- Modelos de caja `rem` [explicacion ↗️](https://youtu.be/YglSzse9tEo)
- Tamaños de fuentes `em` [explicacion ↗️](https://youtu.be/YglSzse9tEo)
- Para colores `hsl` [explicacion ↗️](https://youtu.be/8nHhPa8JFJQ)
- Manipulacion del viewport `dvh dvw` [explicacion ↗️](https://acortar.link/atseOP)

Puede extender mas su conocimiento de CSS con los siguientes videos [🚀 CSS • De Noob a Arquitecto ↗️](https://youtube.com/playlist?list=PLhtkmF724qPf3PqXX3M_55-6Uzqb_StdY&si=qQfV321hOjkpwrYH)

## Metodologias

### Entidades

Las entidades son la parte fundamental de la aplicacion, son lo que puede y no puede interactuar con nuestra aplicacion, da cumplimiento a las reglas y logica de negocio.

Es por eso que desglosamos a las entidades en lo siguiente

1. Esencia ( Types )
2. Forma ( Default Values )
3. Requerimientos ( Schema )
