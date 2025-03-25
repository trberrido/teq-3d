# Notes:

`.htaccess` file:
```
RewriteEngine On
DirectoryIndex index.html
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^(.+)$ index.html? [QSA]
```