var stealTools = require("steal-tools");

var buildPromise = stealTools.build({
	config: __dirname + "/package.json!npm"
}, {
	bundleAssets: {
		infer: false,
		glob: "node_modules/place-my-order-assets/images/**/*"
	}
});
