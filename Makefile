dev: api-dev webapp-dev

api-dev:
	cd api-gateway && yarn dev

webapp-dev:
	cd webapp && yarn dev