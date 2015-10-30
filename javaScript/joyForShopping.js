var blog = (function(){

	var entry = function(title, tag, mainContent){
		//this.mainPhoto = mainPhoto || photoArr[0];
		this.tag = tag;
		this.title = title;
		//this.photoArr = photoArr;
		this.mainContent = mainContent;
		this.postedAt = new Date();
	};

	var blogObj = {

		posts : {},

		addPost : function(title, tag, mainContent){

			this.posts.length = this.posts.length || 0;

			this.posts[title] = new entry(title, tag, mainContent);
			this.posts.length ++;
		},

		remove : function(title){
			delete this.blogPost[title];
		}
	};

	return blogObj;
})();


console.log(blog.posts.length)


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