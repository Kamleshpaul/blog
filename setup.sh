composer install

cp .env.example .env

php artisan key:generate
php artisan migrate
php artisan passport:install --force
chmod -R 777 storage/

npm install
npm run dev
