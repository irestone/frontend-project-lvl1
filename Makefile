publish:
	npm publish --dry-run

install:
	npm install

start:
	node bin/brain-games.js

lint:
	npx eslint .
