# lead_manager


## Python3 virtual environment setup
Remove previously installed pipenv throught python3 because it was not working well before.\
`sudo apt-get remove python3-pipenv`

Installing pipenv.\
`sudo pip3 install pipenv`

Removes previously installed virtualenv\
`sudo apt-get remove python3-virtualenv`

Installing virtualenv.\
`sudo pip3 install virtualenv`

Adding path.\
`export PATH=$PATH:/home/[your_user]/.local/bin/`

## Starting ANY React-Django Project

### Create environment in root directory of the project
`pipenv shell`
### Installing django, django restframework and django rest knox dependencies
`pipenv install django djangorestframework django-rest-knox`<br />
### Create django project
`django-admin startproject leadmanager`<br />
`cd leadmanager`<br />
`python manage.py startapp leads`<br />
### Adding React
`python manage.py startapp frontend`<br />
`mkdir -p ./frontend/src/components`<br />
`mkdir -p ./frontend/{static,templates}/frontend`<br />
`cd ..`<br />

Including all defaults<br />
`npm init -y`<br />
`npm i -D webpack webpack-cli`<br />
`npm i -D @babel/core babel-loader @babel/preset-env @babel/preset-react babel-plugin-transform-class-properties`<br />
`npm i react react-dom prop-types`<br />

In project root directory add file .babelrc and webpack.config.js<br />
Add scripts in package.json<br />

Now run final script<br />
`cd leadmanager`<br />
`npm run dev`<br />
`python mange.py runserver`<br />
`
