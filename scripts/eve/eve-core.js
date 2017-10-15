var bot = new RiveScript();


// Load a list of files all at once (the best alternative to loadDirectory
// for the web!)
bot.loadFile([
	"scripts/eve/brain/begin.rs",
	"scripts/eve/brain/eve-skeptic.rs",
	"scripts/eve/brain/chat-lingo.rs",
	"scripts/eve/brain/clients.rs",
	"scripts/eve/brain/colors.rs",
	"scripts/eve/brain/emoticons.rs",
	"scripts/eve/brain/eve-skeptic.rs",
	"scripts/eve/brain/eve-welcome.rs",
	"scripts/eve/brain/friendly.rs",
	"scripts/eve/brain/humor.rs",
	"scripts/eve/brain/insults.rs",
	"scripts/eve/brain/logic.rs",
	"scripts/eve/brain/myself.rs",
	"scripts/eve/brain/plugins.rs",
	"scripts/eve/brain/prefix-suffix.rs",
	"scripts/eve/brain/star.rs",
	"scripts/eve/brain/yesno.rs",
], loading_done, loading_error);

// All file loading operations are asynchronous, so you need handlers
// to catch when they've finished. If you use loadDirectory (or loadFile
// with multiple file names), the success function is called only when ALL
// the files have finished loading.
function loading_done (batch_num) {
	console.log("Batch #" + batch_num + " has finished loading!");

	// Now the replies must be sorted!
	bot.sortReplies();

	// And now we're free to get a reply from the brain!
	var reply = bot.reply("local-user", "Hello, bot!");
	console.log("The bot says: " + reply);
}

// It's good to catch errors too!
function loading_error (error) {
	console.log("Error when loading files: " + error);
}