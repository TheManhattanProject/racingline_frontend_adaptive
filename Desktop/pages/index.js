import Home from '@/templates/home/Main';

export default function Index() {
	const imageLoader = ({
		src,
		width,
		quality,
	}) => `${src}`;
	return <Home />;
}

// const imageLoader = ({ src, width, quality }) => {
//   return `${src}?w=${width}&q=${quality || 75}`
// }
