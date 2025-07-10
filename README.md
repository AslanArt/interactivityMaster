# interactivityMaster

Une version personnalisée du MCP interactif, modifiée pour optimiser le flux de travail dans Cursor.

## Fonctionnalités modifiées

Cette version se comporte différemment de l'originale pour mieux correspondre à un flux de travail basé sur la validation de plans :

- **Exécution autonome :** Une fois qu'un plan d'action est validé, l'IA l'exécute entièrement sans poser de question à chaque étape (création/modification de fichier).
- **Validation finale :** Quand l'IA estime avoir terminé sa tâche, elle doit obligatoirement vous demander la permission de conclure la session. Elle ne peut plus se terminer d'elle-même.
- **Contrôle utilisateur sur le chat :** L'IA n'a plus la capacité de fermer une session de "chat intensif". Seul l'utilisateur peut fermer la fenêtre pour y mettre fin.

## Installation

Ce MCP s'installe directement depuis ce dépôt GitHub. N'utilisez pas l'installation standard via `npm` car elle ne contient pas ces modifications.

1.  Ouvrez la palette de commandes de Cursor :
    - Windows/Linux : `Ctrl+Shift+P`
    - macOS : `Cmd+Shift+P`
2.  Cherchez et sélectionnez la commande `MCP: Install Server from git repository...`.
3.  Collez l'URL de ce dépôt dans le champ qui apparaît :
    ```
    https://github.com/AslanArt/interactivityMaster.git
    ```
4.  Appuyez sur `Entrée`. Cursor va cloner le dépôt, installer les dépendances (`pnpm install`) et lancer le serveur en se basant sur la configuration `run` du fichier `.cursor-mcp.json`.

L'installation peut prendre un moment la première fois, le temps de télécharger les dépendances.

## Développement

Si vous souhaitez modifier davantage le code :

1.  **Cloner le dépôt :**

    ```bash
    git clone https://github.com/AslanArt/interactivityMaster.git
    cd interactivityMaster
    ```

2.  **Installer les dépendances :**

    ```bash
    pnpm install
    ```

3.  **Lancer le serveur en mode développement :**

    ```bash
    pnpm run start
    ```

4.  **Compiler les modifications :**
    ```bash
    pnpm run build
    ```

## License

MIT
