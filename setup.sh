composer install

cp .env.example .env

php artisan key:generate
php artisan migrate --seed
php artisan passport:install --force
chmod -R 777 storage/
php artisan storage:link

npm install
npm run dev
