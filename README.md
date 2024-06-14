
# Application Météo

Cette application météo permet de rechercher et d'afficher les conditions météorologiques actuelles pour une ville donnée. Elle utilise l'API OpenWeatherMap pour récupérer les données météorologiques.

## Fonctionnalités

- Recherche de la météo par ville
- Affichage des informations telles que la température, les conditions météorologiques, l'humidité et la vitesse du vent
- Interface utilisateur intuitive avec un design responsive
- Intégration d'un footer avec des liens vers GitHub et un portfolio

## Prérequis

- Node.js (version 12 ou supérieure)
- Une clé API OpenWeatherMap

## Installation

1. Clonez ce dépôt sur votre machine locale :
   ```bash
   git clone https://github.com/votre-nom-utilisateur/weather-app.git
   cd weather-app
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Créez un fichier `.env` à la racine du projet et ajoutez votre clé API OpenWeatherMap :
   ```env
   REACT_APP_OPENWEATHERMAP_API_KEY=VOTRE_CLE_API
   ```

## Utilisation

1. Lancez l'application :
   ```bash
   npm start
   ```

2. Ouvrez votre navigateur et allez à l'adresse suivante : `http://localhost:3000`

3. Entrez le nom d'une ville dans le champ de recherche et cliquez sur "Rechercher" pour voir les informations météorologiques.

## Structure du Projet

- `src/App.js` : Composant principal de l'application.
- `src/components/WeatherCard.js` : Composant pour afficher les informations météorologiques.
- `src/services/weatherService.js` : Service pour les appels API à OpenWeatherMap.
- `src/styles/App.css` : Fichier CSS pour le style de l'application.

## Démo

Vous pouvez voir une démonstration de l'application en suivant [ce lien](https://pas-encore-deploy.com).

## Auteur

- **Souleimane Zeggaï**

## License

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## Contact

- [GitHub](https://github.com/souleimane-z)
- [Portfolio](https://www.souleimane-z.com)
