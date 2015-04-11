module.exports = function(db){
	//jobId_1
	db.ensureIndex("runs",{
		"jobId": 1
	},{
		"v": 1,
		"name": "jobId_1",
		"safe": true
	}, function(err){ if(err){ console.error(err); }});

	//enabled_1
	db.ensureIndex("jobs",{
		"enabled": 1
	},{
		"v": 1,
		"name": "enabled_1",
		"safe": true
	}, function(err){ if(err){ console.error(err); }});

	//workerName_1
	db.ensureIndex("jobs",{
		"workerName": 1
	},{
		"v": 1,
		"name": "workerName_1",
		"safe": true
	}, function(err){ if(err){ console.error(err); }});

	//data.provider_id_1_data.cache_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.provider_id": 1,
		"data.cache_status": 1
	},{
		"v": 1,
		"name": "data.provider_id_1_data.cache_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.solr_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.solr_status": 1
	},{
		"v": 1,
		"name": "data.solr_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.cache_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.cache_status": 1
	},{
		"v": 1,
		"name": "data.cache_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.cache_status_1_data.source_1
	db.ensureIndex("queue_profile_updates",{
		"data.cache_status": 1,
		"data.source": 1
	},{
		"v": 1,
		"name": "data.cache_status_1_data.source_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.source_1
	db.ensureIndex("queue_profile_updates",{
		"data.source": 1
	},{
		"v": 1,
		"name": "data.source_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.polish_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.polish_status": 1
	},{
		"v": 1,
		"name": "data.polish_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.stale_status_1
	db.ensureIndex("providers",{
		"data.stale_status": 1
	},{
		"v": 1,
		"name": "data.stale_status_1",
		"background": true
	}, function(err){ if(err){ console.error(err); }});

	//data.stale_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.stale_status": 1
	},{
		"v": 1,
		"name": "data.stale_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.name_1
	db.ensureIndex("queue_profile_video_updates",{
		"data.name": 1
	},{
		"v": 1,
		"name": "data.name_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.molo_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.molo_status": 1
	},{
		"v": 1,
		"name": "data.molo_status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.molo_status_1_updatedAt_1
	db.ensureIndex("queue_profile_updates",{
		"data.molo_status": 1,
		"updatedAt": 1
	},{
		"v": 1,
		"name": "data.molo_status_1_updatedAt_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.cache_status_1_data.solr_status_1_data.polish_status_1_data.source_1
	db.ensureIndex("queue_profile_updates",{
		"data.cache_status": 1,
		"data.solr_status": 1,
		"data.polish_status": 1,
		"data.source": 1
	},{
		"v": 1,
		"name": "data.cache_status_1_data.solr_status_1_data.polish_status_1_data.source_1"
	}, function(err){ if(err){ console.error(err); }});

	//createdAt_1
	db.ensureIndex("queue_profile_updates",{
		"createdAt": 1
	},{
		"v": 1,
		"name": "createdAt_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.provider_id_1_data.master_id_1
	db.ensureIndex("queue_profile_updates",{
		"data.provider_id": 1,
		"data.master_id": 1
	},{
		"v": 1,
		"name": "data.provider_id_1_data.master_id_1"
	}, function(err){ if(err){ console.error(err); }});

	//status_1
	db.ensureIndex("queue_profile_updates",{
		"status": 1
	},{
		"v": 1,
		"name": "status_1"
	}, function(err){ if(err){ console.error(err); }});

	//data.stale_status_1_data.molo_status_1
	db.ensureIndex("providers",{
		"data.stale_status": 1,
		"data.molo_status": 1
	},{
		"v": 1,
		"name": "data.stale_status_1_data.molo_status_1",
		"background": true
	}, function(err){ if(err){ console.error(err); }});

	//data.provider_id_1_data.solr_status_1
	db.ensureIndex("queue_profile_updates",{
		"data.provider_id": 1,
		"data.solr_status": 1
	},{
		"v": 1,
		"name": "data.provider_id_1_data.solr_status_1"
	}, function(err){ if(err){ console.error(err); }});
};