start:
	make install
	make lint
	make commander
	npm install crc-32 fs path

install:
	npm ci

lint:
	npx eslint .

fix:
	npx eslint --fix .

commander:
	npm install commander
