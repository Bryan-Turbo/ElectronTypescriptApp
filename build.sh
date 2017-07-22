#!/bin/bash

if [ ! -d ./build ]; then 
    mkdir build
fi

if [ -d ./views ]; then
    if [ -d ./build/views ]; then
        rm -r ./build/views
    fi
    cp -r ./views ./build/views
    echo Found and built views directory
fi

if [ -d ./styling ]; then
    if [ -d /build/styling ]; then
        rm -r ./build/styling
    fi
    cp -r ./styling ./build/styling
    echo Found and built views directory
fi