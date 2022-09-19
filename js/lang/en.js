// namespace
if (typeof app === "undefined") app = {};
if (typeof app.dict === "undefined") app.dict = {};

// example usage:
// let notSelectedYet = app.dict[app.lang].notSelectedYet;

app.dict.en = {
    none: "None",
    required: "Required",
    notSelectedYet: "Not selected yet",
    notUploadedYet: "Not uploaded yet",
    yes: "Yes",
    no: "No",
    missingNftStorageApiToken: `Missing the IPFS API token. You can add it under Settings in the IPFS tab.`,
    selectAFileFirst: "Select a file first.",
    anErrorOccurredUsingNftStorageKey: "An error occurred trying to upload to nft.storage using API key: ",
    missingIpfsApiToken: "Missing the IPFS API token. You can add it under Settings in the IPFS tab.",
    jsonTextIsBlank: "JSON text is blank.",
    uploadingToNftStorage: "Uploading to nft.storage.",
    uploadingMetadataToNftStorage: "Uploading metadata to nft.storage.",
    licenseUploadedToNftStorage: "License uploaded to nft.storage.",
    metadataUploadedToNftStorage: "Metadata uploaded to nft.storage.",
    snapshotDataNotCompatible: "The loaded JSON is not a Mintr snapshot.",
    nftDataNotCompatible: "The loaded JSON is not a valid NFT metadata file.",
    clearNftData: "Clear NFT Data?",
    resetAllData: "Replace all the custom values with the defaults?",
    saveSettings: "Save Settings",
    saveNftMetatdata: "Save NFT Metadata",
    label: "Label",
    value: "Value",
    min: "Min",
    max: "Max",

    htmlElementIdValuePairs: [
        {id: "navbarDropdown", value: "File"},
        {id: "loadSnapshotMenuItemId", value: "Load Settings"},
        {id: "loadNftMetadataMenuItemId", value: "Load NFT Metadata"},

        {id: "settingsTabId", value: "1. Settings"},

        {id: "nav-creator-tab", value: "Creator"},
        {id: "royaltyPercentLabelId", value: "Royalty Percent"},
        {id: "royaltyAddressLabelId", value: "Royalty Address"},
        {id: "nftAddressLabelId", value: "Target Address"},
        {id: "didAddressLabelId", value: "DID Address"},

        {id: "nav-collection-tab", value: "Collection"},
        {id: "collectionIdLabelId", value: "Collection Id"},
        {id: "collectionNameLabelId", value: "Collection Name"},
        {id: "collectionDescriptionLabelId", value: "Collection Description"},
        {id: "collectionIconLabelId", value: "Icon"},
        {id: "collectionBannerLabelId", value: "Banner"},
        {id: "collectionTwitterLabelId", value: "Twitter"},
        {id: "collectionTwitterLabelId", value: "Twitter"},
        {id: "collectionWebsiteLabelId", value: "Website"},
        {id: "collectionDiscordLabelId", value: "Discord"},
        {id: "collectionInstagramLabelId", value: "Instagram"},
        {id: "collectionInstagramLabelId", value: "Instagram"},
        {id: "collectionMediumLabelId", value: "Medium"},
        {id: "collectionEditionNumberLabelId", value: "Edition Number"},
        {id: "collectioneditionTotalLabelId", value: "Edition Total"},


        {id: "nav-license-tab", value: "License"},
        {id: "licenses_-basic-tab", value: "Basic"},
        {id: "uploadLicenseToIpfsId", value: "Upload License"},
        {id: "licenses_-custom-tab", value: "Expert"},
        {id: "licenseHashLabelId", value: "License Hash"},


        {id: "nav-chia-tab", value: "Chia"},
        {id: "walletIdLabelId", value: "Wallet Index"},
        {id: "walletFingerprintLabelId", value: "Wallet Fingerprint"},
        {id: "feeLabelId", value: "Mint Fee (XCH)"},

        {id: "nav-ipfs-tab", value: "IPFS"},
        {id: "nftStorageApiTokenLabelId", value: "NFT.Storage API Token"},

        {id: "assetTabId", value: "2. Asset"},
        {id: "urls-basic-tab", value: "Basic"},
        {id: "uploadImageToIpfsId", value: "Upload Image"},

        {id: "urls-custom-tab", value: "Expert"},
        {id: "assetHashLabelId", value: "Asset Hash"},
        {id: "addUrlButtonId", value: "Add URI (+)"},


        {id: "nftDataTabId", value: "3. NFT Data"},
        {id: "nav-basic-tab", value: "Basic"},
        {id: "nav-traits-tab", value: "Traits"},
        {id: "addTraitButtonId", value: "Add Trait (+)"},


        {id: "metadataTabId", value: "4. Metadata"},
        {id: "metadat-basic-tab", value: "Basic"},
        {id: "makeSureYourMetadataIsCompleteId", value: "Make sure your metadata is complete:"},
        {id: "uploadMetadataToIpfs", value: "Upload Metadata"},

        {id: "metadat-custom-tab", value: "Expert"},
        {id: "metadataHashLabelId", value: "Metadata Hash"},

        {id: "mintTabId", value: "4. Mint"},
        {id: "commands-rpc-tab", value: "RPC"},
        {id: "commands-cli-tab", value: "CLI"},
        {id: "copyRPCtoClipboardId", value: "Copy RPC Command"},
        {id: "copyCLItoClipboardId", value: "Copy CLI Command"},

        {id: "nftNameLabelId", value: "Name"},
        {id: "nftDescriptionLabelId", value: "Description"},
        {id: "nftIsSensitiveLabelId", value: "Is sensitive"},

        {id: "seriesNumberLabelId", value: "Series Number"},
        {id: "seriesTotalLabelId", value: "Series Total"},

    ]
}