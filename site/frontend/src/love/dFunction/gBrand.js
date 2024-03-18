import swifttalk from "@/love/hAsset/business/21.png";

const brand = () => {
	var brandObject

		brandObject = {
			logo: swifttalk,
			name: "Swift Talk",
			app: "https://beehive-frontend.netlify.app/",
			admin: "https://beehive-admin.netlify.app/"
		}
						
	return brandObject
}

export default brand