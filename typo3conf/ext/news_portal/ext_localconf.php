<?php
defined('TYPO3') or die('Access denied.');
/***************
 * Add default RTE configuration
 */
$GLOBALS['TYPO3_CONF_VARS']['RTE']['Presets']['news_portal'] = 'EXT:news_portal/Configuration/RTE/Default.yaml';

/***************
 * PageTS
 */
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:news_portal/Configuration/TsConfig/Page/All.tsconfig">');
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScriptSetup(
    '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:newsapi_fetch/Configuration/TypoScript/setup.txt">'
);
