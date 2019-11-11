composer install

cp .env.example .env

php artisan key:generate
php artisan migrate
php artisan passport:install --force

npm install
npm run dev
