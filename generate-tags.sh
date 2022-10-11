#!/bin/bash
echo "[" > blogtags.json
find content/blog -path "*.md" -exec yq --front-matter=extract '.tags | .[]' {} \; | sort -u | awk '{ printf "  \"%s\",\n", $0}' >> blogtags.json
echo "  \"\"" >> blogtags.json
echo "]" >> blogtags.json
