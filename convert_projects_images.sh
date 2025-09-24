#!/bin/bash

# Function to convert images in a folder
convert_images_in_folder() {
    local folder=$1
    
    echo "Processing folder: $folder"
    cd "$folder" || return 1
    
    # Convert .tif and .tiff files to .jpg
    for file in *.tif *.tiff; do
        if [ -f "$file" ]; then
            base_name=$(basename "$file" .tif)
            base_name=$(basename "$base_name" .tiff)
            jpg_name="${base_name}.jpg"
            
            echo "  Converting: $file -> $jpg_name"
            magick "$file" "$jpg_name" 2>/dev/null || echo "    Error converting $file"
            rm "$file" 2>/dev/null || echo "    Could not remove $file"
        fi
    done
    
    # Convert .png files to .jpg
    for file in *.png *.PNG; do
        if [ -f "$file" ]; then
            base_name=$(basename "$file" .png)
            base_name=$(basename "$base_name" .PNG)
            jpg_name="${base_name}.jpg"
            
            echo "  Converting: $file -> $jpg_name"
            magick "$file" "$jpg_name" 2>/dev/null || echo "    Error converting $file"
            rm "$file" 2>/dev/null || echo "    Could not remove $file"
        fi
    done
    
    # Convert .JPG files to .jpg (lowercase)
    for file in *.JPG; do
        if [ -f "$file" ]; then
            base_name=$(basename "$file" .JPG)
            jpg_name="${base_name}.jpg"
            
            echo "  Converting: $file -> $jpg_name"
            mv "$file" "$jpg_name" 2>/dev/null || echo "    Error renaming $file"
        fi
    done
    
    cd ..
}

# Navigate to projects directory
cd /Users/rodrigo/Documents/lucilaaguilar/public/images/proyectos

# Process each project folder
echo "Starting image conversion process in proyectos folder..."

for folder in */; do
    if [ -d "$folder" ]; then
        convert_images_in_folder "$folder"
        echo "Completed: $folder"
        echo "---"
    fi
done

echo "Image conversion completed!"
