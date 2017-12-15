#!/usr/bin/env bash
# React Front-End build
cd src/main/resources/reakt && nowa build
cd ../../../../
# Processing Resources

srcPath=src/main/resources/reakt/dist/

#ls src/main/resources/reakt/dist/ |grep ".html$" |xargs -n1 -I {}  cat src/main/resources/reakt/dist/{}
ls src/main/resources/reakt/dist/ |grep ".html$" |xargs -n1 -I {} sed -i '.bak' 's|<script src="/|<script src="/js/|g' "$srcPath"{}

ls src/main/resources/reakt/dist/ |grep ".html$" |xargs -n1 -I {} sed -i '.bak' 's|<link rel="stylesheet" href="/|<link rel="stylesheet" href="/css/|g' "$srcPath"{}

templatesPath=src/main/resources/templates/
staticJsPath=src/main/resources/static/js/
staticCssPath=src/main/resources/static/css/

# 这里的-d 参数判断 $templatesPath 是否存在
if [ ! -d "$templatesPath" ];then
mkdir "$templatesPath"
fi

if [ ! -d "$staticJsPath" ];then
mkdir "$staticJsPath"
fi

if [ ! -d "$staticCssPath" ];then
mkdir "$staticCssPath"
fi



ls "$srcPath" |grep ".html$" |xargs -n1 -I {} cp -Rf "$srcPath"{} "$templatesPath"
ls "$srcPath" |grep ".js$" |xargs -n1 -I {} cp -Rf "$srcPath"{} "$staticJsPath"
ls "$srcPath" |grep ".css$" |xargs -n1 -I {} cp -Rf "$srcPath"{} "$staticCssPath"


