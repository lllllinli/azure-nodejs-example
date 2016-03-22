"use strict";

class BlobStorage
{
	constructor(azure, web){
		this.logger = web.logger;
		
		this.storage = azure.storage;
		this.config = web.config;
		
		const accountName = this.config.get('storage:accountName');
		const accountKey = this.config.get('storage:accountKey');
		
		this.logger.info('Connecting to blob storage...');
		this.blobService = this.storage.createBlobService(accountName, accountKey);
		this.blobService.createContainerIfNotExists('progcompdata', function(error, result, response){
			if(error) {
				throw error;
			} else{
				//this.logger.info('Blob container created - "%s"', 'progcompdata')
			}
		});
	}
}

module.exports = BlobStorage;