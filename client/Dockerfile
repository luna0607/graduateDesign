FROM z01:5000/nginx
USER root
#RUN apt-get update && apt-get install --no-install-recommends --no-install-suggests -y curl

COPY default /etc/nginx/conf.d/default.conf
COPY build /usr/share/nginx/html

CMD nginx -g "daemon off;"

HEALTHCHECK --interval=5s --timeout=30s --retries=50 \
	CMD curl -f localhost:80 || exit 1
