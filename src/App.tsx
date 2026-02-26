import { Frame } from './components/frame';
import { Footer } from './components/footer';
import { useLocale } from './context/locale';
import { ThemeProvider } from '@mui/material';
import createAppTheme from './lib/theme';

function App() {
	const { locale } = useLocale();
	const theme = createAppTheme(locale);

	return (
		<ThemeProvider theme={theme}>
			<Frame />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
