start:
	make install
	make lint
	make commander

install:
	npm ci

lint:
	npx eslint .

fix:
	npx eslint --fix .

commander:
	npm install commander
