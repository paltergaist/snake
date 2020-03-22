import settings from "./settings";

const config = Object.create(settings);

config.init = function (settings) {
    this.settings = {...this.settings, ...settings}
}

export default config;

