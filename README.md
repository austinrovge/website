# Website
This is a redesign of my personal site that serves as a way for me to learn ReactJS.

SASS and ReactJS must be compiled before the web page can be accessed.  

### Installation
#### Downloading and compiling the code  
The SASS and ReactJS code must be compiled as browsers can't read the raw code.  

``` bash
$ git clone https://github.com/austinrovge/website.git
$ cd website
$ yarn install
$ yarn run build
```

### Starting a Server
#### Production
A production server can be started using 

``` bash
$ yarn run start
```

This starts a `nodejs` server on port `80` which will serve the client with the index.html file, and redirect any requests for any other path back to the index.html file. The server is run using the package `forever` which will restart the server five times after crashing.   

The server can then be stopped with the command

``` bash
$ yarn run stop
```

#### Development
Alternatively, a development server can be spun up with

``` bash
$ yarn run local
```

This starts a `nodejs` server on port `8080` which the developer can then test things with.

### Future Development
* ~~Either use a node server or continue with NGINX config for redirecting to the index.html file~~
* Transitions
* Implement redux in a way that is natural and not forced