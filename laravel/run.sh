#!/bin/bash

composer install
php artisan key:generate
php artisan migrate:refresh --seed
chmod -R 777 ./vendor