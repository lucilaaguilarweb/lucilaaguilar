#!/bin/bash

echo "Starting image homogenization process..."

# Navigate to projects directory
cd /Users/rodrigo/Documents/lucilaaguilar/public/images/proyectos

# Function to rename images in a folder
homogenize_folder() {
    local folder=$1
    local project_name=$2
    
    echo "Processing folder: $folder"
    cd "$folder" || return 1
    
    # Initialize counters for each category
    local exterior=1 interior=1 render=1 plan=1 detail=1 process=1 presentation=1 general=1
    
    # Process each image file
    for file in *.jpg *.JPG *.png *.PNG; do
        if [ ! -f "$file" ]; then continue; fi
        
        # Convert to lowercase for pattern matching
        lowercase_file=$(echo "$file" | tr '[:upper:]' '[:lower:]')
        
        # Determine category based on filename patterns
        if [[ "$lowercase_file" =~ (exterior|fachada|vista.*exterior|external) ]]; then
            category="exterior"
            counter=$exterior
            ((exterior++))
        elif [[ "$lowercase_file" =~ (interior|interiores|inside|internal) ]]; then
            category="interior"
            counter=$interior
            ((interior++))
        elif [[ "$lowercase_file" =~ (render|3d|visualizacion|copia.*render) ]]; then
            category="render"
            counter=$render
            ((render++))
        elif [[ "$lowercase_file" =~ (planta|corte|seccion|plan|modular|grafico) ]]; then
            category="plan"
            counter=$plan
            ((plan++))
        elif [[ "$lowercase_file" =~ (detalle|detail|close|macro) ]]; then
            category="detail"
            counter=$detail
            ((detail++))
        elif [[ "$lowercase_file" =~ (proceso|process|construction|work) ]]; then
            category="process"
            counter=$process
            ((process++))
        elif [[ "$lowercase_file" =~ (presentacion|presentation|lamina|slide) ]]; then
            category="presentation"
            counter=$presentation
            ((presentation++))
        else
            category="general"
            counter=$general
            ((general++))
        fi
        
        # Create new filename
        new_name="${project_name}-${category}-$(printf "%02d" $counter).jpg"
        
        # Rename the file
        mv "$file" "$new_name"
        echo "  Renamed: $file -> $new_name"
    done
    
    cd ..
}

# Process each project folder
homogenize_folder "casa-valle" "casa-valle"
homogenize_folder "crece-tu-asa" "crece-tu-casa"
homogenize_folder "crece-tu-escuela" "crece-tu-escuela"
homogenize_folder "finca-don-jorge" "finca-don-jorge"
homogenize_folder "humanitree" "humanitree"
homogenize_folder "ixua" "ixua"
homogenize_folder "jardin-de-la-diosa" "jardin-de-la-diosa"
homogenize_folder "la-ceiba " "la-ceiba"
homogenize_folder "loto-pabellon-flotante" "loto-pabellon-flotante"
homogenize_folder "oficinas-uumbal " "oficinas-uumbal"
homogenize_folder "orquideario " "orquideario"
homogenize_folder "pabellon-semilla" "pabellon-semilla"
homogenize_folder "pericos" "pericos"
homogenize_folder "refugio-oajtl-cca-chapultepec" "refugio-oajtl"
homogenize_folder "tolsa " "tolsa"

echo "Image homogenization completed!"
