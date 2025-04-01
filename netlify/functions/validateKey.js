exports.handler = async (event, context) => {
    const VALID_KEYS = new Set(['suraj-yadav', 'yadav-brand', 'mars', 'cutie']);
    
    // Get the key from the query parameter
    const userKey = event.queryStringParameters.key;
    
    console.log(`Received validation request for key: ${userKey}`);
    
    // Check if the key was provided
    if (!userKey) {
        console.log('Validation failed: Key is missing.');
        return {
            statusCode: 400,
            body: JSON.stringify({ error: 'Missing required query parameter: key' })
        };
    }
    
    // Check if the provided key is in our set of valid keys
    if (VALID_KEYS.has(userKey)) {
        console.log(`Validation successful for key: ${userKey}`);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Key is valid' })
        };
    } else {
        console.log(`Validation failed: Invalid key provided: ${userKey}`);
        return {
            statusCode: 401,
            body: JSON.stringify({ error: 'Invalid key provided' })
        };
    }
};
