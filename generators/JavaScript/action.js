'use strict';

/**
 * @fileoverview Generating JavaScript for action blocks.
 */

goog.provide('Blockly.JavaScript.action');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['action_forward'] = function(block) {
	return 'moveforward(\'' + block.id +'\');\n';
};

Blockly.JavaScript['action_turnright'] = function(block) {
	return 'turnright(\'' + block.id +'\');\n';
};

Blockly.JavaScript['action_turnleft'] = function(block) {
	return 'turnleft(\'' + block.id +'\');\n';
};

Blockly.JavaScript['action_collect'] = function(block) {
	return 'collect(\'' + block.id +'\');\n';
};
