#!/bin/zsh 

LOG_FILE="$HOME/.logs/homebrew.log"

date &>> "$LOG_FILE"

/opt/homebrew/bin/brew update &>> "$LOG_FILE"

/opt/homebrew/bin/brew upgrade &>> "$LOG_FILE"

echo "-----------------------------------" >> "$LOG_FILE"

