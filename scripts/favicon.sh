#!/bin/bash
echo "converting favicon PNG to ICO"
cd public/
magick favicon.png -define icon:auto-resize=16,32,48 favicon.ico
