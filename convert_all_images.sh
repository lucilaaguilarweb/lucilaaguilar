#!/bin/bash

echo "Starting image conversion process..."

# Navigate to projects directory
cd /Users/rodrigo/Documents/lucilaaguilar/public/images/proyectos

# casa-valle folder
echo "Converting casa-valle..."
cd casa-valle
magick _DSC6441.tif _DSC6441.jpg
magick _DSC6460.tif _DSC6460.jpg
rm _DSC6441.tif _DSC6460.tif
cd ..

# crece-tu-asa folder
echo "Converting crece-tu-asa..."
cd crece-tu-asa
magick Componenetes.png Componenetes.jpg
magick Ecotecnias.png Ecotecnias.jpg
magick Modular.png Modular.jpg
# Convert JPG to jpg
mv "00 Cerchas.JPG" "00-cerchas.jpg"
mv "02 BTC 01.JPG" "02-btc-01.jpg"
mv "02 BTC 02.JPG" "02-btc-02.jpg"
mv "04 PMC 01.JPG" "04-pmc-01.jpg"
rm Componenetes.png Ecotecnias.png Modular.png
cd ..

# ixua folder
echo "Converting ixua..."
cd ixua
magick "IXUA - 1.PNG" "ixua-1.jpg"
magick "IXUA - 2.PNG" "ixua-2.jpg"
magick "IXUA - 3.PNG" "ixua-3.jpg"
magick "IXUA - 4.PNG" "ixua-4.jpg"
magick "IXUA - 5.PNG" "ixua-5.jpg"
magick "IXUA - 6.png" "ixua-6.jpg"
rm "IXUA - 1.PNG" "IXUA - 2.PNG" "IXUA - 3.PNG" "IXUA - 4.PNG" "IXUA - 5.PNG" "IXUA - 6.png"
cd ..

# oficinas-uumbal folder
echo "Converting oficinas-uumbal..."
cd "oficinas-uumbal "
magick "Oficinas Uumbal - 1.tif" "oficinas-uumbal-1.jpg"
magick "Oficinas Uumbal - 2.tif" "oficinas-uumbal-2.jpg"
magick "Oficinas Uumbal - 3.tif" "oficinas-uumbal-3.jpg"
magick "Oficinas Uumbal - 4.tif" "oficinas-uumbal-4.jpg"
magick "Oficinas Uumbal - 5.tif" "oficinas-uumbal-5.jpg"
magick "Oficinas Uumbal - 6.tif" "oficinas-uumbal-6.jpg"
rm "Oficinas Uumbal - 1.tif" "Oficinas Uumbal - 2.tif" "Oficinas Uumbal - 3.tif" "Oficinas Uumbal - 4.tif" "Oficinas Uumbal - 5.tif" "Oficinas Uumbal - 6.tif"
cd ..

# orquideario folder
echo "Converting orquideario..."
cd "orquideario "
magick "Orquideario - 1.tif" "orquideario-1.jpg"
magick "Orquideario - 2.tif" "orquideario-2.jpg"
rm "Orquideario - 1.tif" "Orquideario - 2.tif"
cd ..

# refugio-oajtl-cca-chapultepec folder
echo "Converting refugio-oajtl-cca-chapultepec..."
cd refugio-oajtl-cca-chapultepec
magick "Refugio Oajtl - 1.png" "refugio-oajtl-1.jpg"
magick "Refugio Oajtl - 2.png" "refugio-oajtl-2.jpg"
magick "Refugio Oajtl - 3.png" "refugio-oajtl-3.jpg"
magick "Refugio Oajtl - 4.png" "refugio-oajtl-4.jpg"
rm "Refugio Oajtl - 1.png" "Refugio Oajtl - 2.png" "Refugio Oajtl - 3.png" "Refugio Oajtl - 4.png"
cd ..

# tolsa folder
echo "Converting tolsa..."
cd "tolsa "
magick "Tolsa - 1.tif" "tolsa-1.jpg"
magick "Tolsa - 2.tif" "tolsa-2.jpg"
rm "Tolsa - 1.tif" "Tolsa - 2.tif"
cd ..

echo "Image conversion completed!"
echo "All .tif, .tiff, and .png files have been converted to .jpg format."
