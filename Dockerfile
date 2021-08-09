FROM httpd:2.4.48-alpine3.14
ARG COPYDIR=_site
COPY $COPYDIR/* /usr/local/apache2/htdocs/