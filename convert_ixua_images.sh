#!/bin/bash

echo "Converting IXUA PNG files to JPG..."

# Navigate to ixua folder
cd /Users/rodrigo/Documents/lucilaaguilar/public/images/proyectos/ixua

# Convert PNG files to JPG
magick "2. Andadores Comerciales con PórticoRender Portico-Sin Personas en Primer Plano.png" "andadores-comerciales-sin-personas.jpg"
magick "Copia de Conjunto.PNG" "conjunto.jpg"
magick "Copia de Fachadas 01.PNG" "fachadas-01.jpg"
magick "Copia de Fachadas 03.PNG" "fachadas-03.jpg"
magick "Copia de Fachadas 04.PNG" "fachadas-04.jpg"
magick "Copia de Techos.PNG" "techos.jpg"

# Remove original PNG files
rm "2. Andadores Comerciales con PórticoRender Portico-Sin Personas en Primer Plano.png"
rm "Copia de Conjunto.PNG"
rm "Copia de Fachadas 01.PNG"
rm "Copia de Fachadas 03.PNG"
rm "Copia de Fachadas 04.PNG"
rm "Copia de Techos.PNG"

echo "IXUA PNG files converted to JPG successfully!"
