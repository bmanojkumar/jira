var appRouter = function(app) {
	app.post("/jira",function(req,res){
		console.log(req.body);
	});

	app.get("/status",function(req,res){
		res.json({"status" : "running"});
	});
}

module.exports = appRouter;