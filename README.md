# interactivityMaster

Une version personnalisée du MCP interactif, modifiée pour optimiser le flux de travail dans Cursor.

## Fonctionnalités modifiées

Cette version se comporte différemment de l'originale pour mieux correspondre à un flux de travail basé sur la validation de plans :

- **Exécution autonome :** Une fois qu'un plan d'action est validé, l'IA l'exécute entièrement sans poser de question à chaque étape (création/modification de fichier).
- **Validation finale :** Quand l'IA estime avoir terminé sa tâche, elle doit obligatoirement vous demander la permission de conclure la session. Elle ne peut plus se terminer d'elle-même.
- **Contrôle utilisateur sur le chat :** L'IA n'a plus la capacité de fermer une session de "chat intensif". Seul l'utilisateur peut fermer la fenêtre pour y mettre fin.

## Installation et Lancement

Ce projet doit être installé localement pour que Cursor puisse utiliser votre version modifiée.

### 1. Installation

Ouvrez un terminal, puis clonez et installez le paquet globalement :

```bash
# Clonez votre dépôt
git clone https://github.com/AslanArt/interactivityMaster.git

# Déplacez-vous dans le dossier
cd interactivityMaster

# Installez les dépendances du projet
pnpm install

# Installez-le globalement sur votre système
npm install -g .
```

### 2. Lancement dans Cursor

Une fois l'installation terminée, vous pouvez lancer ce MCP dans Cursor :

1.  Ouvrez la palette de commandes ( `Ctrl+Shift+P` ).
2.  Cherchez et sélectionnez une commande comme `MCP: Run server by command...`.
3.  Entrez la commande suivante dans le champ qui apparaît :
    ```
    npx -y interactive-mcp
    ```

Cursor va maintenant lancer votre version locale.

## Développement

Si vous souhaitez modifier davantage le code, les scripts principaux sont :

- `pnpm run start`: Pour lancer le serveur en mode développement.
- `pnpm run build`: Pour compiler les modifications.

## License

MIT
