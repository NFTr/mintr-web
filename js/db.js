// namespace
if (typeof app === `undefined`) app = {};

// init the db
app.initIndexedDb = function () {
    app.db = new Dexie("NFTrMintrDB");
    app.db.version(4).stores({
        currentNft: '++id,userData'
    });
}

// when the page starts up (init), we load the data from the last session
app.loadUserDataFromIndexedDbOrDefaults = function () {
    app.db.open().then(function () {
        let result = app.db.currentNft.get(1, {userData: app.userData}).then(function (allData) {
            if (allData) {
                // console.log("Get previous user data");
                // console.log(allData.userData);
                app.userData = allData.userData;

                app.handleReloadEdgeCases();

                app.updateAppWithNewUserData(app.userData);
            } else {
                // console.log("Nothing was found, using defaultData");
                app.userData = app.defaultData;
                result = app.db.currentNft.add({userData: app.userData});
            }
        });

        return result;

    }).catch(Dexie.MissingAPIError, function () {
        console.log("Couldn't find indexedDB API");
        // }).catch(function (e) {
        //     console.log(e);
    });
}

// writing changes for next time
app.writeUserDataToIndexedDB = function (userData) {
    app.db.open().then(function () {

        let result = app.db.currentNft.update(1, {userData: userData}).then(function (allData) {
            if (allData) {
                // console.log("Updated data");
            } else {
                // console.log("Nothing was found, writing new record (this ever shouldn't happen)");
                result = app.db.currentNft.add({userData: userData});
            }
        });

        return result;

    }).catch(Dexie.MissingAPIError, function () {
        console.log("Couldn't find indexedDB API");
    }).catch(function (e) {
        console.log(e);
    });
}
