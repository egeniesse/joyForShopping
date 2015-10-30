var blog = (function(){

	var blogObj = {

		blogPost : {},

		post : function(title, photoArr, mainContent, mainPhoto){
			this.blogPost[title] = new entry(title, photoArr, mainContent, mainPhoto);
		},

		remove : function(title){
			delete this.blogPost[title];
		}
	};

	var entry = function(title, photoArr, mainContent, mainPhoto){
		this.mainPhoto = mainPhoto || photoArr[0];
		this.title = title;
		this.photoArr = photoArr;
		this.mainContent = mainContent;
		this.postedAt = new Date();
	};



	return blogObj;
})();

// create an object to store the blog and invoke an anonymous function

	// create blogObject variable that is an object
		// set the blogPosts key equal an object that houses the blog objects
		// make a post function that adds a newEntry object into the blogPost object using the title as a key
		// make a remove function that removes the object with the desired title

	// create newEntry object constructor function that takes a main photo, array of photos, title, and body arguments
		// set the key values equal to each of the arguments
		// set the date equal to new date
		// return this






	//return the blogObject vairable