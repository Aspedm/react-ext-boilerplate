import React from 'react';

const App: React.FC = () => {
	return (
		<div style={{
			position: 'fixed',
			top: '50%',
			left: '50%',
			backgroundColor: 'white',
			padding: 15,
			border: '1px solid black',
			boxShadow: '10px 15px black',
			zIndex: 9999,
		}}>
			This is content script.
		</div>
	);
};

export default App;
