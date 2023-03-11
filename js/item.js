const item_type = {
	image: drawImage,
	audio: drawAudio,
	video: drawVideo
}

function drawImage(item) {
	const imgElement = document.createElement('img');
	imgElement.classList = 'card_img';
	imgElement.src = item.resourse;

	return imgElement
}

function drawAudio(item) {
	const audioElement = document.createElement('audio');
	audioElement.classList = 'card_audio';
	audioElement.src = item.resourse;
	audioElement.controls = true;

	return audioElement
}

function drawVideo(item) {
	const videoElement = document.createElement('video');
	videoElement.classList = 'card_video';
	videoElement.src = item.resourse;
	videoElement.controls = true;

	return videoElement
}

export function drawGalleryItem(item) {
	const itemElement = document.createElement('div');
	itemElement.classList = 'card'

	const wrapElement = document.createElement('div');
	wrapElement.classList = 'card_resourse';

	const drawTypeTitle = item_type[item.type];
	wrapElement.appendChild(drawTypeTitle(item))

	const titleElement = document.createElement('span');
	titleElement.classList = 'card-text';
	titleElement.textContent = item.title

	itemElement.appendChild(wrapElement)
	itemElement.appendChild(titleElement)

	return itemElement
}






















// export function drawGalleryItem(item) {
// 	const itemElement = document.createElement('div');
// 	itemElement.classList = 'card';

// 	const wrapElement = document.createElement('div');
// 	wrapElement.classList = 'card_resourse';

// 	if (item.type === 'image') {
// 		const imgElement = document.createElement('img');
// 		imgElement.classList = 'card-img'
// 		imgElement.src = item.resourse

// 		wrapElement.appendChild(imgElement);
// 	} else if (item.type === 'audio') {
// 		const audioElement = document.createElement('audio');
// 		audioElement.classList = 'card-audio';
// 		audioElement.src = item.resourse;
// 		audioElement.controls = true

// 		wrapElement.appendChild(audioElement)
// 	}
// 	const titleElement = document.createElement('span');
// 	titleElement.classList = 'card-text';
// 	titleElement.textContent = item.title

// 	itemElement.appendChild(wrapElement)
// 	itemElement.appendChild(titleElement);

// 	return itemElement
// }