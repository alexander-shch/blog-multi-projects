This is a free to use code, do what ever you want with it there are no licenses or requirement to contact me about it.
It's just a personal repo that I use to train code and learn new things.
Open to any one to take a look.


# blog-multi-projects
This repo represents different stacks for the same purpose, mainly for practicing

All of the apps BE and FE will be working working with docker compose (The file is in the root of the project)
Right now being used mainly to initiate a DB

## Init with docker
Just run `docker-compose` with required services, for example `docker-compose up ruby react` or `docker-compose up node angular` etc...

No pre-installations are required, the docker files will handle everything for you. copy / install / init / etc...

**DO NOT** run multiple BE and FE services at the same time as they all use the same ports so you will have conflicts

# Server

## Ruby with rails - WIP
***Why is it soooo dificult to setup? Spent hours on small little issues that could have easily be resolved with a little more docs / script***

WIP: need to learn some more basics of how ruby and rails work behind the scenes
Need to understand better how sessions are being handled and controllers in global

## Node (NestJS) - WIP
Swagger - Installed
- Need to add schemas (Currently set only on login)
    - DB handled with typeorm and pg - Posts and users creation and fetching works with relations
    - Still need to add more logic for update and delete

Auth - Works
- Not sure if to init user entity and pass it as a class into the request or leave as is? Will benefit for dataSource and db craete docs but that's it
- All end points are behind auth 
- Special IsPublic decorator was created as only a small sum are open API calls for example login / register

## GoLang - To be done

## Java - To be done

## Python - To be done


# Client

## React - WIP
Nothing to see here yet, it's just the shell

## Angular - WIP
Nothing to see here yet, it's just the shell

## Vue - WIP
Nothing to see here yet, it's just the shell

## Plain vanila JS/HTML/CSS?
Probably will never do this part 🤷‍♂️?!?



