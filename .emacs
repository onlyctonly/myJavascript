(require 'package)
(add-to-list 'package-archives
         '("marmalade" . "http://marmalade-repo.org/packages/")
         t)
(add-to-list 'package-archives
             '("melpa" . "https://melpa.org/packages/")
         t)
(package-initialize)

(setq-default major-mode 'text-mode)
(add-hook 'text-mode-hook 'turn-on-visual-line-mode)
(add-hook 'text-mode-hook 'flyspell-mode)
(scroll-bar-mode -1)
(menu-bar-mode -1)

(setq initial-buffer-choice t)
(find-file "z:/newsletters/emails/email")
;(desktop-save-mode 1)
(setq frame-title-format "jxyu")
(load-theme 'monokai t)
(tool-bar-mode -1)
(set-default 'cursor-type 'bar)
(winner-mode t)
(setq-default abbrev-mode t)
(setq save-abbrevs t)
(setq visible-bell 1)


(cua-mode t)
(global-linum-mode 0)
;(nlinum-mode)
(electric-pair-mode)
(powerline-default-theme)
(set-face-attribute 'default nil :height 140)
(require 'multiple-cursors)
(global-set-key (kbd "C-S-c C-S-c") 'mc/edit-lines)
(global-set-key (kbd "C->") 'mc/mark-next-like-this)
(global-set-key (kbd "C-<") 'mc/mark-previous-like-this)
(global-set-key (kbd "C-c C-<") 'mc/mark-all-like-this)

(global-set-key (kbd "<f5>") 'calculator)
(global-set-key (kbd "<f8>") 'bookmark-bmenu-list)
(global-set-key (kbd "<f7>") 'Buffer-menu)

(defalias 'yes-or-no-p 'y-or-n-p)
(require 'auto-complete)
(require 'auto-complete-config)
(ac-config-default)

(global-set-key (kbd "<apps>") 'shell)