#!/bin/bash

# Script to convert all images in specific folders to JPG format
# Target folders: bienal-habana, green-architecture-loft, design-week, down-to-earth-loft, film-festival-ny

echo "Starting image conversion to JPG format..."
echo "Target folders: bienal-habana, green-architecture-loft, design-week, down-to-earth-loft, film-festival-ny"
echo ""

# Create backup directory
BACKUP_DIR="public/images-conversion-backup-$(date +%Y%m%d-%H%M%S)"
echo "Creating backup at: $BACKUP_DIR"
mkdir -p "$BACKUP_DIR"
echo "Backup directory created!"
echo ""

# Define target folders
TARGET_FOLDERS=(
    "bienal-habana"
    "green-architecture-loft" 
    "design-week"
    "down-to-earth-loft"
    "film-festival-ny"
)

# Counters for statistics
TOTAL_FILES=0
CONVERTED_FILES=0
SKIPPED_FILES=0

# Process each target folder
for folder in "${TARGET_FOLDERS[@]}"; do
    folder_path="public/images/$folder"
    
    if [ ! -d "$folder_path" ]; then
        echo "⚠️  Folder $folder_path does not exist, skipping..."
        continue
    fi
    
    echo "📁 Processing folder: $folder"
    
    # Create backup of the folder
    cp -r "$folder_path" "$BACKUP_DIR/"
    echo "  ✓ Backup created for $folder"
    
    # Find all image files in the folder
    find "$folder_path" -type f \( -name "*.png" -o -name "*.tif" -o -name "*.tiff" -o -name "*.heic" \) | while read -r filepath; do
        TOTAL_FILES=$((TOTAL_FILES + 1))
        filename=$(basename "$filepath")
        dirpath=$(dirname "$filepath")
        
        # Get file extension
        extension="${filename##*.}"
        
        echo "  Converting: $filename"
        
        # Create new filename with .jpg extension
        new_filename="${filename%.*}.jpg"
        new_filepath="$dirpath/$new_filename"
        
        # Convert using ImageMagick
        if magick "$filepath" -quality 90 -strip "$new_filepath"; then
            # Remove original file if conversion successful
            rm "$filepath"
            echo "    ✓ Converted $filename → $new_filename"
            CONVERTED_FILES=$((CONVERTED_FILES + 1))
        else
            echo "    ✗ Failed to convert $filename"
            SKIPPED_FILES=$((SKIPPED_FILES + 1))
        fi
    done
    
    echo "  📊 Folder $folder processing complete"
    echo ""
done

echo ""
echo "=== CONVERSION COMPLETE ==="
echo "Total files processed: $TOTAL_FILES"
echo "Successfully converted: $CONVERTED_FILES"
echo "Failed conversions: $SKIPPED_FILES"
echo ""
echo "Backup available at: $BACKUP_DIR"
echo "You can safely delete the backup once you've verified the results."

# Show new folder sizes
echo ""
echo "📊 New folder sizes:"
for folder in "${TARGET_FOLDERS[@]}"; do
    if [ -d "public/images/$folder" ]; then
        size=$(du -sh "public/images/$folder" | cut -f1)
        echo "  $folder: $size"
    fi
done
