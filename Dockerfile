FROM httpd:2.4.48-alpine3.14
ARG COPYDIR=_site
COPY /home/runner/work/Data-Patterns/Data-Patterns/_site/* /usr/local/apache2/htdocs/