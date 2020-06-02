# Comment utiliser Git

## Installation

- Linux : https://git-scm.com/download/linux
- Windows : https://git-scm.com/download/win

## Configuration

- `git config --list` liste les paramètres
- `git config --global user.name "Nom utilisateur"` configure le nom de l'utilisateur de manière globale.
- `git config --global user.email email.utilisateur@domain.com` configure l'email de l'utilisateur de manière globale.

## Utilisation

- `git clone https://lienCopiéSurGitHub` clone un dépôt GitHub sur l'ordinateur dans le dossier courant.
- `git init` active le répertoire courant en repository git (ajoute un dossier caché .git au répertoire).
- `git status` donne le statut du repository (fichiers indexés ou non pouvant faire l'objet d'un commit).
- `git log` donne les différents commit du repository.
- `git add nomFichierOuDossier1 nomFichierOuDossier2` ajoute des fichiers ou des dossiers à l'index de git.
- `git commit` permet de créer un commit à partir du contenu de l'index de git et ouvre l'éditeur pour inscrire la description du commit.
    - `git commit -m "Entrez ici le résumé du commit" -m "Entrez ici la description détaillée du commit"` permet de créer un commit et d'ajouter la description en même temps.
    - `git commit --amend` modifie le dernier commit.
- `git push nomRemote nomBranche` envoi les commits vers une branche d'un dépôt.
    - Par exemple : `git push origin master`
    - `git push --force nomRemote nomBranche` remplace les commits en communs du dépôt par ceux de l'ordinateur.
- `git reset --hard` annule les changements qui n'ont pas encore été enregistrés dans un commit.

## Pour aller plus loin

- [Cours OpenClassrooms](https://openclassrooms.com/fr/courses/5641721-utilisez-git-et-github-pour-vos-projets-de-developpement)