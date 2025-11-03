# ProductManager

// Docker 
```
docker run --name postgres17 \
  -e POSTGRES_USER=admin \
  -e POSTGRES_PASSWORD=admin123 \
  -e POSTGRES_DB=products \
  -p 5432:5432 \
  -d postgres:17
```

docker stop postgres17
docker rm -f postgres17
docker rmi postgres:17

// URL de conexion
* postgresql://admin:admin123@localhost:5432/products