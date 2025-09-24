#!/bin/bash

# Script to fix missing closing braces in projectsData.ts
# This will add missing closing braces after content properties

# Read the file and fix the structure
awk '
/^  },$/ { print; next }
/^  {$/ { print; next }
/^    slug:/ { print; next }
/^    title:/ { print; next }
/^    subtitle:/ { print; next }
/^    description:/ { print; next }
/^    year:/ { print; next }
/^    coverImage:/ { print; next }
/^    folderPath:/ { print; next }
/^    category:/ { print; next }
/^    content:/ { 
    print
    in_content = 1
    next
}
in_content && /^`$/ { 
    print
    in_content = 0
    print "  },"
    next
}
{ print }
' src/data/projectsData.ts > temp_file.ts

mv temp_file.ts src/data/projectsData.ts
