#!/bin/bash

sudo git clone https://github.com/mitni455/ks-Domnom-fixes /home/Domnom/ks-Domnom-fixes
sudo chmod -R 777 /home/Domnom/ks-Domnom-fixes
sudo docker-compose -f /home/Domnom/ks-Domnom-fixes/docker-compose.yml up -d 
sudo docker exec ksdomnomfixes_frontend_1 /var/www/angular/run.sh
sudo docker exec ksdomnomfixes_workspace_1 /var/www/laravel/run.sh