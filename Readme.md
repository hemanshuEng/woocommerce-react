# Woocommerce API + React + Redux

### Design for website   
[Adobe XD file for design](https://github.com/hemanshuEng/ecommerce-site-design)  

### Woocommerce api setup 
wordpress site is dockerized and folder is WordpressTheme so download docker on machine  
To Run make command in window download [Gnuwin32](http://gnuwin32.sourceforge.net/packages/make.htm) 
##### start container wordpress
```makefile
   make docker-start
```
or cd into WorrdpressTheme 
```
    docker-compose up -d 
```
first time it will start wordpress installation.  
go to plugin and activate woocommerce plugin (if it is not install add a new plugin and download and install a plugin)
###### Woocommerce setup
After active plugin there will be Woocommerce setup start or you can go to woocommerce setting ,setup woocommerce.  
Choose any theme because we are going to use only rest api 
download Dummydata for development 
**Tools**  &#8594; **import** &#8594; **WooCommerce Products** &#8594; Run importer  
sample data location:  
```
    \wp-content\plugins\woocommerce\sample-data\sample_product.csv
```

###### change setting option permalinks
according to woocommerce api permalinks need to be like 
```
http://localhost/2020/05/sample-post/
```
?p=123 is not allowed to access rest api

###### Generate consumer key and secret key 
Go to **woocommerce**  &#8594; **setting** &#8594; **Advanced** &#8594; **Rest Api**
after that copy and both key and added to create .env file in frontend folder  
note:  
https: woocommerce api is using basic auth
http: woocommerce api is using oauth1.0 (for development we need to use oauth1.0)
```
REACT_APP_CONSUMER_KEY=xxxxx
REACT_APP_CONSUMER_SECRET=xxxxx
REACT_APP_SIGNATURE_METHOD=HMAC-SHA1
REACT_APP_BASE_URL=http://localhost/wp-json/wc/v3
```
### Run React App
This is not dockerized at the moment . it is in development.
for First time  
```makefile
make react-install
```
Run app 
```makefile
make react-start
``` 

### if woocommerce and React are setup 
Run both app
```makefile
make start
```