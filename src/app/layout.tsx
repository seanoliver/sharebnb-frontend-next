import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Sharebnb',
	description: 'Find and share stunning outdoor spaces.',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={`
					${inter.className}
					text-slate-500
					bg-gradient-to-b from-slate-200 to-white
					dark:text-slate-400
					dark:from-slate-900
					dark:to-slate-800
					flex align-middle flex-col justify-center
					h-full
				`}>
				<div className='container mx-auto'>{children}</div>
			</body>
		</html>
	);
}
