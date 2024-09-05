
const fetchOrderData = async () => {
    try {
        const response = await fetch('https://ls-products-8f76e2d2fc97.herokuapp.com/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export { fetchOrderData }