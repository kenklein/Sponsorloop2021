# ./Dockerfile

FROM node:12-alpine as node-angular-cli

LABEL authors="Kenneth Lee Klein"

RUN npm install -g @angular/cli@8
