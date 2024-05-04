" Vim Setup {{{
" Disable compatibility with vi which can cause unexpected issues.
set nocompatible

" Enable type file detection. Vim will try to detect the type of file in use.
filetype on

" Turn syntax highlighting on.
syntax on

" Set the color scheme to 'sorbet'.
colorscheme sorbet

" Set the commands to save in history default number is 20.
set history=1000
" Set folding method to use markers 
set foldmethod=marker
" }}}

" Text Editing {{{
" Set the maximum width of text that is being inserted.
" A value of 0 (default) means that lines will not be broken automatically.
set textwidth=80

" Do not wrap lines automatically when reaching the textwidth limit.
" Allow long lines to extend as far as the line goes.
set nowrap

" Automatically wrap text when typing, but only at word boundaries.
set linebreak

" Set shift width (indentation) to 4 spaces.
set shiftwidth=4

" Set tab width to 4 columns.
set tabstop=4

" Use space characters instead of tabs for indentation.
set expandtab

" Allow backspace to work as expected in different situations:
" - indent: remove indentation at the beginning of a line
" - eol: join the current line with the previous line when at the start
" - start: delete the character before the cursor when at the start of a line
set backspace=indent,eol,start

" use :set spell! or :set invspell inside Vim to toggle spell checking
set spell spelllang=en_us
" }}}

" Search and Navigation {{{
" While searching through a file incrementally highlight matching characters as you type.
set incsearch

" Ignore capital letters during search (case-insensitive search).
set ignorecase

" Highlight all occurrences of the search pattern.
set hlsearch

" Show line numbers on the left side.
set number
" }}}

" File Management {{{
" Don't create backup files (files with ~ extension).
set nobackup

" Don't create swap files (files with .swp extension).
set noswapfile
" }}}

" Status Line {{{
" Clear status line when vimrc is reloaded.
set statusline=

" Status line left side.
set statusline+=\ %F\ %M\ %Y\ %R

" Use a divider to separate the left side from the right side.
set statusline+=%=

" Status line right side.
set statusline+=\ row:\ %l\ col:\ %c\ percent:\ %p%%

" Show the status on the second to last line.
set laststatus=2

" }}}
