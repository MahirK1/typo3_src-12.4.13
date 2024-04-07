<?php

/**
 * Extension Manager/Repository config file for ext "news_portal".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'News-portal',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '12.4.0-12.4.99',
            'fluid_styled_content' => '12.4.0-12.4.99',
            'rte_ckeditor' => '12.4.0-12.4.99',
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Mahir\\NewsPortal\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Mahir',
    'author_email' => 'mahir.ku@outlook.com',
    'author_company' => 'Mahir',
    'version' => '1.0.0',
];
