# Prisma test

## Installation

Dans votre terminal, allez dans le dossier de votre choix

#### Cloner le projet

```
$ git clone https://github.com/Mehdouz/prismaTest.git
```

#### Aller dans le dossier créé

```
$ cd prismaTest
```

#### Installer les packages

```
$ npm install
```

## Lancer l'application en local

```
$ npm run dev #http://localhost:1234
```

Ouvrir ensuite votre navigateur et aller a l'adresse suivante : http://localhost:1234

## Lancer le build pour production

```
$ npm run build
```

La commande générera un dossier `public` à la racine prêt pour la production

---

## Plugins

Appelés dans src/js/main.js

### Parallax

    parallax({
        container: ".topBanner", // Selection du bloc où appliquer le parallax
        image: ".topBanner**logoContainer**logo", // OPTIONEL, permet de selectionner une image premier plan
        backgroundSpeed: 0.2, // Vélocité de l'image de fond du bloc sélectionné dans container
        imageSpeed: -0.5, // OPTIONEL, Vélocité de l'image sélectionnée dans 'image'
    });
