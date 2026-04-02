FROM nginx:1.27-alpine

COPY index.html /usr/share/nginx/html/index.html
COPY about.html /usr/share/nginx/html/about.html
COPY services.html /usr/share/nginx/html/services.html
COPY styles.css /usr/share/nginx/html/styles.css
COPY script.js /usr/share/nginx/html/script.js
COPY logo.svg /usr/share/nginx/html/logo.svg

EXPOSE 80
