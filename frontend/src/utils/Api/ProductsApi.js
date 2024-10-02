import axios from "axios";

const GetProducts = async () => {
	try {
		const response = await axios.get('/products');
		return response;
	} catch (error) {
		console.error('Error fetching data:', error);
		return null;
	}
};

export {GetProducts}

