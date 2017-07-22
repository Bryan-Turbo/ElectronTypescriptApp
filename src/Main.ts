import { BrowserWindow } from 'electron';
export default class Main {
    static mainWindow: Electron.BrowserWindow;
    static application: Electron.App;
    static BrowserWindow;



    static main(app: Electron.App, browserWindow: typeof BrowserWindow) {
        Main.application = app;
        Main.BrowserWindow = browserWindow;

        Main.application.on('window-all-closed', function () {
            if (process.platform !== 'darwin') {
                app.quit()
            }
        });

        Main.application.on('ready', function () {
            Main.mainWindow = new BrowserWindow({ width: 400, height: 300 });

            Main.mainWindow.loadURL(`file://${__dirname}/views/index.html`);
            Main.mainWindow.on('close', function () {
                Main.mainWindow = null;
            })
        });
    }
}