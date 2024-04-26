# Utilisation de l'image officielle PHP pour Laravel
FROM php:8.1

# Définition du répertoire de travail
WORKDIR /app/backend

# Installation des dépendances nécessaires
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Installation de Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Copie des fichiers du projet dans le conteneur
COPY . .

# Installation des dépendances PHP
RUN composer install --no-scripts --no-autoloader

# Exécution de l'autoloader et des scripts
RUN composer dump-autoload --optimize

# Exposer le port 
EXPOSE 8000

# Commande pour démarrer le serveur
CMD php artisan serve --host=0.0.0.0
