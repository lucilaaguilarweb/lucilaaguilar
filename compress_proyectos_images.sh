#!/bin/bash

# Script to compress and resize images in proyectos folder
# This will significantly reduce file sizes while maintaining good quality

echo "Starting image compression and resizing process..."
echo "Balanced approach: Max 1600x1200px, 80% quality"
echo "This will optimize images for web performance while maintaining good quality."
echo ""

# Create backup directory
BACKUP_DIR="public/images/proyectos-backup-$(date +%Y%m%d-%H%M%S)"
echo "Creating backup at: $BACKUP_DIR"
cp -r public/images/proyectos "$BACKUP_DIR"
echo "Backup created successfully!"
echo ""

# Compression settings - Balanced approach for web optimization
QUALITY=80  # JPEG quality (80 is optimal for web performance)
MAX_WIDTH=1600  # Maximum width for web display
MAX_HEIGHT=1200  # Maximum height for web display

# Counters for statistics
TOTAL_FILES=0
PROCESSED_FILES=0
ORIGINAL_SIZE=0
NEW_SIZE=0

# Get total count and original size
TOTAL_FILES=$(find public/images/proyectos/ -name "*.jpg" | wc -l)
ORIGINAL_SIZE=$(find public/images/proyectos/ -name "*.jpg" -exec du -b {} \; | awk '{sum += $1} END {print sum}')

echo "Found $TOTAL_FILES images to process"
echo "Original total size: $(echo "scale=2; $ORIGINAL_SIZE / 1024 / 1024" | bc) MB"
echo ""

# Process each folder
for folder in public/images/proyectos/*/; do
    if [ -d "$folder" ]; then
        folder_name=$(basename "$folder")
        echo "Processing folder: $folder_name"
        
        # Process each JPG file in the folder
        for image in "$folder"*.jpg; do
            if [ -f "$image" ]; then
                filename=$(basename "$image")
                echo "  Compressing: $filename"
                
                # Get original file size
                original_file_size=$(stat -f%z "$image" 2>/dev/null || stat -c%s "$image" 2>/dev/null)
                
                # Create temporary file for processing
                temp_file="${image}.tmp"
                
                # Resize and compress using ImageMagick
                # -resize: resize if larger than max dimensions, maintain aspect ratio
                # -quality: set JPEG quality
                # -strip: remove metadata to reduce file size
                # -interlace: progressive JPEG for better web loading
                magick "$image" \
                    -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" \
                    -quality $QUALITY \
                    -strip \
                    -interlace JPEG \
                    "$temp_file"
                
                # Check if compression was successful
                if [ $? -eq 0 ]; then
                    # Get new file size
                    new_file_size=$(stat -f%z "$temp_file" 2>/dev/null || stat -c%s "$temp_file" 2>/dev/null)
                    
                    # Only replace if new file is smaller
                    if [ "$new_file_size" -lt "$original_file_size" ]; then
                        mv "$temp_file" "$image"
                        echo "    ✓ Reduced from $(echo "scale=1; $original_file_size / 1024 / 1024" | bc)MB to $(echo "scale=1; $new_file_size / 1024 / 1024" | bc)MB"
                    else
                        rm "$temp_file"
                        echo "    - No reduction needed ($(echo "scale=1; $original_file_size / 1024 / 1024" | bc)MB)"
                    fi
                    
                    ((PROCESSED_FILES++))
                else
                    echo "    ✗ Failed to process $filename"
                    rm -f "$temp_file"
                fi
            fi
        done
        echo ""
    fi
done

# Calculate final statistics
NEW_SIZE=$(find public/images/proyectos/ -name "*.jpg" -exec du -b {} \; | awk '{sum += $1} END {print sum}')
SAVINGS=$((ORIGINAL_SIZE - NEW_SIZE))
SAVINGS_PERCENT=$(echo "scale=1; ($SAVINGS * 100) / $ORIGINAL_SIZE" | bc)

echo "=== COMPRESSION COMPLETE ==="
echo "Files processed: $PROCESSED_FILES / $TOTAL_FILES"
echo "Original size: $(echo "scale=2; $ORIGINAL_SIZE / 1024 / 1024" | bc) MB"
echo "New size: $(echo "scale=2; $NEW_SIZE / 1024 / 1024" | bc) MB"
echo "Space saved: $(echo "scale=2; $SAVINGS / 1024 / 1024" | bc) MB ($SAVINGS_PERCENT%)"
echo ""
echo "Backup available at: $BACKUP_DIR"
echo "You can safely delete the backup once you've verified the results."
