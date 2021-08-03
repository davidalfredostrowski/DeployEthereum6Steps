const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "2184396d93fcf189f622c6cf1f458748f560bb9aac8d5f0f410ef23dce8e6264"
const endpointUrl = "https://kovan.infura.io/v3/88c649f3670e4f6594cf9961f5dd9873"



module.exports = {
	networks: { 
		development: { 
				host: "127.0.0.1",
				port: 7545,
				network_id: "*",
		},
		kovan: {
			provider: function() {
					return new HDWalletProvider ( 
						// private keys array
						[privateKey],
						// url to ethereum node
						endpointUrl
					)	
			},
			gas: 5000000,
			gasPrice: 25000000000,
			network_id: 42 
		}
	}
}



