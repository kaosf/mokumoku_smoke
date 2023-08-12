function loadFlavors(flavorsData) {
    const flavorsList = flavorsData.map(flavor => flavor.name);
    return flavorsList;
}

function loadTags(tagsData) {
    const tagList = [];
    tagsData.forEach(tagData => {
        tagList.push(...tagData.tag);
    });
    return tagList;
}

function loadBlocklist(blockData) {
    return blockData;
}

function checkExclusion(tag, blocklist) {
    for (const flavorTag of tag) {
        if (blocklist.hasOwnProperty(flavorTag)) {
            if (new Set(tag).has(blocklist[flavorTag])) {
                return true;
            }
        }
    }
    return false;
}

const flavorsData = [
    // JSON形式のデータをここに埋め込む
];

const tagsData = [
    // JSON形式のデータをここに埋め込む
];

const blocklistData = {
    // JSON形式のデータをここに埋め込む
};

const flavors = loadFlavors(flavorsData);
const tags = loadTags(tagsData);
const blocklist = loadBlocklist(blocklistData);

const numDraw = 4;
const uniqueResults = new Set();

while (uniqueResults.size < numDraw) {
    const selectedFlavor = [...flavors].sort(() => Math.random() - 0.5).slice(0, 3);

    if (!checkExclusion(selectedFlavor, blocklist)) {
        uniqueResults.add(selectedFlavor.toString());
    }
}

uniqueResults.forEach(result => {
    console.log(result.split(','));
});
