// Get YouTube embed URL from a YouTube video URL
const getYoutubeEmbedURL = (url) => {
	try {
		const urlObj = new URL(url);
		const videoId = urlObj.searchParams.get("v");
		return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
	} catch (e) {
		return null;
	}
};

export { getYoutubeEmbedURL };
