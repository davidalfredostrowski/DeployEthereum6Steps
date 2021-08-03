const HDWalletProvider = require('@truffle/hdwallet-provider');
const privateKey = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
const endpointUrl = "https://kovan.infura.io/v3/XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"



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



