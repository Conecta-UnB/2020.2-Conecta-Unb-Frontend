build:
	docker build -t conecta-app .
run:
	
	docker run -it --rm -v ${CURDIR}:/app -v /app/node_modules -p 3001:3000 conecta-app