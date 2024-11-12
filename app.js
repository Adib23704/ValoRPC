import { app, Tray, Menu } from 'electron';
import path from 'path';
import process from 'process';

let tray = null;

app.on('ready', () => {
	tray = new Tray(path.join(process.cwd(), 'assets', 'icon.png'));
	const contextMenu = Menu.buildFromTemplate([
		{ label: 'Exit', role: 'quit' }
	]);
	tray.setToolTip('ValoRPC');
	tray.setContextMenu(contextMenu);
});