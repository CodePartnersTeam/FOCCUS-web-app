export function emitSound(url: string) {
	const audioPopAlert = new Audio(url)
	return audioPopAlert.play()
}
