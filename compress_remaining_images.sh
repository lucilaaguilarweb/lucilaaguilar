#!/bin/bash

# Script to compress and resize ALL remaining images in public/images/
# Excludes exposiciones and proyectos folders (already optimized)
# This will significantly reduce file sizes while maintaining good quality

echo "Starting image compression and resizing process for ALL remaining images..."
echo "Excluding: exposiciones/ and proyectos/ folders (already optimized)"
echo "Balanced approach: Max 1600x1200px, 80% quality"
echo "This will optimize images for web performance while maintaining good quality."
echo ""

# Create backup directory
BACKUP_DIR="public/images-remaining-backup-$(date +%Y%m%d-%H%M%S)"
echo "Creating backup at: $BACKUP_DIR"
cp -r public/images "$BACKUP_DIR"
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

# Find all image files excluding exposiciones and proyectos folders
find public/images -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.tif" -o -name "*.tiff" \) ! -path "*/exposiciones/*" ! -path "*/proyectos/*" | while read -r filepath; do
    TOTAL_FILES=$((TOTAL_FILES + 1))
    filename=$(basename "$filepath")
    dirpath=$(dirname "$filepath")
    relative_path=${dirpath#public/images/}

    # Get original file size
    current_size=$(stat -f%z "$filepath")
    ORIGINAL_SIZE=$((ORIGINAL_SIZE + current_size))

    # Get image dimensions
    dimensions=$(identify -format "%wx%h" "$filepath")
    width=$(echo "$dimensions" | cut -d'x' -f1)
    height=$(echo "$dimensions" | cut -d'x' -f2)

    echo "  Processing: $relative_path/$filename"
    echo "    Dimensions: ${width}x${height}"

    # Create temporary file for conversion
    temp_file="${filepath}.tmp"

    # Only resize if image is larger than MAX_WIDTH or MAX_HEIGHT
    if (( width > MAX_WIDTH || height > MAX_HEIGHT )); then
        # Use ImageMagick to resize, compress, strip metadata, and make progressive
        magick "$filepath" -resize "${MAX_WIDTH}x${MAX_HEIGHT}>" -quality "$QUALITY" -strip -interlace Plane "$temp_file"
    else
        # Only compress, strip metadata, and make progressive if no resizing is needed
        magick "$filepath" -quality "$QUALITY" -strip -interlace Plane "$temp_file"
    fi

    # Replace original with compressed version
    mv "$temp_file" "$filepath"

    # Get new file size
    new_current_size=$(stat -f%z "$filepath")
    NEW_SIZE=$((NEW_SIZE + new_current_size))

    # Calculate reduction for individual file
    reduction_mb=$(echo "scale=1; ($current_size - $new_current_size) / (1024*1024)" | bc)
    original_mb=$(echo "scale=1; $current_size / (1024*1024)" | bc)
    new_mb=$(echo "scale=1; $new_current_size / (1024*1024)" | bc)

    if (( $(echo "$reduction_mb > 0" | bc -l) )); then
        echo "    ✓ Reduced from ${original_mb}MB to ${new_mb}MB"
        PROCESSED_FILES=$((PROCESSED_FILES + 1))
    else
        echo "    - No reduction needed (${new_mb}MB)"
    fi
    echo ""
done

echo ""
echo "=== COMPRESSION COMPLETE ==="
echo "Files processed: $PROCESSED_FILES / $TOTAL_FILES"

# Calculate total sizes in MB
ORIGINAL_SIZE_MB=$(echo "scale=2; $ORIGINAL_SIZE / (1024*1024)" | bc)
NEW_SIZE_MB=$(echo "scale=2; $NEW_SIZE / (1024*1024)" | bc)
SPACE_SAVED_MB=$(echo "scale=2; ($ORIGINAL_SIZE - $NEW_SIZE) / (1024*1024)" | bc)

if (( $(echo "$ORIGINAL_SIZE_MB > 0" | bc -l) )); then
    PERCENT_SAVED=$(echo "scale=2; ($SPACE_SAVED_MB / $ORIGINAL_SIZE_MB) * 100" | bc)
    echo "Original size: ${ORIGINAL_SIZE_MB}MB"
    echo "New size: ${NEW_SIZE_MB}MB"
    echo "Space saved: ${SPACE_SAVED_MB}MB (${PERCENT_SAVED}%)"
else
    echo "No files were processed or original size is 0"
fi

echo ""
echo "Backup available at: $BACKUP_DIR"
echo "You can safely delete the backup once you've verified the results."
