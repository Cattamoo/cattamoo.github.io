export const getAge = (birthdate: string): number => {
	const [y, m, d] = birthdate.split('.').map((item) => parseInt(item));
	const date: Date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
	let diff = year - y;
	if(`${month.toString().padStart(2, '0')}${day.toString().padStart(2, '0')}` < `${m.toString().padStart(2, '0')}${d.toString().padStart(2, '0')}`) {
		diff -= 1;
	}
	return diff;
}