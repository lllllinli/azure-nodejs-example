"use strict";

const BlobStorage = require('./blob');
const fs = require('fs');

class ProgCompServer
{	
	static get ROOTDIR(){
		return "/ProgComp/";
	}
	
	constructor(web, azure) {
		this.logger = web.logger;
		this.app = web.app;
		this.render = web.render;
		this.storage = new BlobStorage(azure, web);
		this.route = web.route;
	}
	
	init() {
		this.logger.info('Starting ProgComp module...');
		
		let levels = this.loadLevelDesc();
		
		this.app.use(this.route.get('/', function *() {
			yield this.render('ProgComp/Views/index.jade', {levels: levels});
		}));
	}
	
	loadLevelDesc() {
		const levels = JSON.parse(fs.readFileSync('ProgComp/levels.json', 'utf8'));
		return levels;
	}
};

module.exports = ProgCompServer;