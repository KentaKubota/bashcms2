#!/bin/bash

source "$(dirname $0)/conf"

### VARITABLES ###
md="$contentsdir/posts/template/main.md"


### OUTPUT ###

pandoc --template="$viewdir/template.html" \
    -f markdown_github+yaml_metadata_block "$md"
