import React from 'react';

export function useLocalStorage (key: string) {
	const [value, rawSetValue] = React.useState<string | null>(() => {
		if (typeof localStorage !== 'undefined') return localStorage.getItem(key);
		else return null;
	});

	React.useEffect(() => {
		rawSetValue(localStorage.getItem(key));
	}, [key]);

	function setValue (newValue: string | null) {
		if (typeof newValue === 'string') localStorage.setItem(key, newValue);
		else localStorage.removeItem(key);
		rawSetValue(newValue);
	}

	return [value, setValue] as const;
}