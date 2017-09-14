function CreateMenu() {

    alert("CreateMenu");

    var gui = require('nw.gui');
    var win = gui.Window.get();
    var menubar = new gui.Menu({ type: 'menubar' });
    var Setting = new gui.Menu();
    alert("Setting");

    Setting.append(new gui.MenuItem({
        label: 'Full',
        click: function() {
            win.enterFullscreen();
        }
    }));
    Setting.append(new gui.MenuItem({
        label: 'exitFull',
        click: function() {
            win.leaveFullscreen();
        }
    }));
    menubar.append(new gui.MenuItem({ label: 'Setting', submenu: Setting }));
    var win = gui.Window.get();
    win.menu = menubar;

}