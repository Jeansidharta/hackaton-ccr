// Framework
import React from 'react';
import Head from 'next/head';

// Misc
import FilledThemeProvider from '../theme';
import AppContainer from '../containers/_app';
import Services from '../services';
import Context from '../contexts';

type MyAppProps = React.PropsWithoutRef<{
	Component: any,
	pageProps: any,
}>;

type MyAppComponent = React.FunctionComponent<MyAppProps>;

const MyApp: MyAppComponent = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				{/* Global styling */}
				<style>{`
					body, html, #__next {
						height: 100%;
						margin: 0;
					}
					* {
						box-sizing: border-box;
						font-family: 'Roboto', sans-serif;
					}
				`}
				</style>

				{/* Add Roboto font */}
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />


				{/* Favicon related stuff */}
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
				<link rel='icon' href='/favicon.ico' type='image/x-icon' />
			</Head>

			<FilledThemeProvider>
				<Context>
					<Services />
					<AppContainer>
						<Component {...pageProps} />
					</AppContainer>
				</Context>
			</FilledThemeProvider>
		</>
	);
};

export default MyApp;
