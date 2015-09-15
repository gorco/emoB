'use strict';

exports.port = process.env.PORT || '3232';
exports.mongodb = {
    uri: process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/emoB'
};
exports.apiPath = 'http://localhost:8080/xAPI/';
exports.companyName = 'companyName';
exports.projectName = 'projectName';
exports.lrs = {
    uri: process.env.LRS_URI || process.env.LRS_URL || 'http://localhost:8080/xAPI/',
    username: 'openlrs',
    password: 'openlrs'
};