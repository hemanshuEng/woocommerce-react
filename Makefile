docker-start:
	cd WordpressTheme && \
	Echo "directory change WordpressTheme" && \
  	docker-compose up -d && \
  	Echo "Starting Wordpress site"

docker-stop:
	cd WordpressTheme && \
    Echo "directory change WordpressTheme" && \
    docker-compose stop && \
    Echo "stopping Wordpress site"

react-start:
	cd frontend && \
	Echo "change directory frontend" && \
	npm start && \
	Echo "starting react server"

start:
	make docker-start && \
	make react-start