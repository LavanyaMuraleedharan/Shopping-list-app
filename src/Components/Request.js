async function Request(url, options) {
    try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Network response was not ok");
        return null; // Indicating success with no error message
    } catch (error) {
        return error.message; // Return the error message in case of a failure
    }
}

export default Request;
