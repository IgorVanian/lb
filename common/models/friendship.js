'use strict';

module.exports = function(Friendship) {

	Friendship.add = function(target, options, cb) {
		const FolxUser =  this.app.models.FolxUser;

		console.log("OPTIONS", options.accessToken);
		FolxUser.findById(options.accessToken.userId).then(user => {
			const currentUser = user;
			console.log("CURRENT USER:", currentUser);

			return Friendship.create({
		    	sentBy: currentUser,
		    	target
		    }, function(err, friendship) {
		      cb(null, friendship);
		    });
		});
  	};
};
