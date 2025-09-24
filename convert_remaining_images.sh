#!/bin/bash

echo "Converting remaining .tif files..."

# Navigate to projects directory
cd /Users/rodrigo/Documents/lucilaaguilar/public/images/proyectos

# oficinas-uumbal folder - convert the remaining .tif files
echo "Converting oficinas-uumbal..."
cd "oficinas-uumbal "
magick "Uumbal Beneficio (1 of 16).tif" "uumbal-beneficio-1.jpg"
magick "Uumbal Beneficio (5 of 16).tif" "uumbal-beneficio-5.jpg"
magick "Uumbal Beneficio (11 of 16).tif" "uumbal-beneficio-11.jpg"
magick "Uumbal Beneficio (12 of 16).tif" "uumbal-beneficio-12.jpg"
magick "Uumbal Beneficio (13 of 16).tif" "uumbal-beneficio-13.jpg"
magick "Uumbal Beneficio (15 of 16).tif" "uumbal-beneficio-15.jpg"
rm "Uumbal Beneficio (1 of 16).tif" "Uumbal Beneficio (5 of 16).tif" "Uumbal Beneficio (11 of 16).tif" "Uumbal Beneficio (12 of 16).tif" "Uumbal Beneficio (13 of 16).tif" "Uumbal Beneficio (15 of 16).tif"
cd ..

# orquideario folder - convert the remaining .tif files
echo "Converting orquideario..."
cd "orquideario "
magick "Orquideario (5 of 6).tif" "orquideario-5.jpg"
magick "Orquideario (6 of 6).tif" "orquideario-6.jpg"
rm "Orquideario (5 of 6).tif" "Orquideario (6 of 6).tif"
cd ..

# tolsa folder - convert the remaining .tif files
echo "Converting tolsa..."
cd "tolsa "
magick "Tolsa_7.tif" "tolsa-7.jpg"
magick "Tolsa_9.tif" "tolsa-9.jpg"
rm "Tolsa_7.tif" "Tolsa_9.tif"
cd ..

echo "All remaining .tif files converted to .jpg!"
