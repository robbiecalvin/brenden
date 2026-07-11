// Global App Config

const isGitHubPages =
    window.location.hostname.includes("github.io");


const repoName = "brenden"; // ← CHANGE if repo name changes


export const CONFIG = {

    BASE_PATH: isGitHubPages
        ? `/${repoName}`
        : "",


    getDataPath: (file) => {
        return `${CONFIG.BASE_PATH}/data/${file}`;
    },


    getAssetPath: (file) => {
        return `${CONFIG.BASE_PATH}/assets/${file}`;
    },


    getPagePath: (file) => {
        return `${CONFIG.BASE_PATH}/pages/${file}`;
    }

};

// Universal Data Loader

export async function loadJSON(file){

    const response =
    await fetch(
        CONFIG.getDataPath(file)
    );

    if(!response.ok){
        throw new Error(
            `Failed to load: ${file}`
        );
    }

    return await response.json();
}

export async function loadJSON(file){

    console.log("Loading:", file);

    const response =
    await fetch(CONFIG.getDataPath(file));

    if(!response.ok){
        console.error("FAILED:", file);
        throw new Error(`Failed to load: ${file}`);
    }

    return await response.json();
}