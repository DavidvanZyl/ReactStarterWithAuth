import { action } from '@storybook/addon-actions';
import React from 'react';

export default {
	title: 'Button',
	component: () => <button></button>,
};

export const Text = () => (
	<button onClick={action('clicked')}>Hello Button</button>
);
