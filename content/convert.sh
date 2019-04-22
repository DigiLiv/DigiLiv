#!/usr/bin/env bash

for FILE in *; do
    if [[ -f $FILE ]]; then
        if [[ $FILE =~ ^[0-9]{4}-[0-9]{2}-[0-9]{2}-(.*)\.(md|markdown)$ ]]; then
            ARTICLENAME=${BASH_REMATCH[1]}
            mkdir $ARTICLENAME

            cp $FILE $ARTICLENAME/index.md
            rm $FILE
        fi
    fi
done
