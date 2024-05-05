# Oh-My-Zsh Configuration
# ========================
export ZSH="$HOME/.oh-my-zsh"

# Theme
ZSH_THEME="robbyrussell"

# Plugins
plugins=(git aliases)
source $ZSH/oh-my-zsh.sh

# Custom Configurations
# =====================
source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /opt/homebrew/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.dotfiles/zsh/.aliases
eval "$(zoxide init zsh)"

# Node Version Manager
# ====================
NVM_DIR="$HOME/.nvm"
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  # Load NVM
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"  # Load NVM bash completion

# Function
# =========
function tt() {
    tgpt "\"$*\""
}

# Environment variables
# =========
export $(cat ~/.env | xargs)
