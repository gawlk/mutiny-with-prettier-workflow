const { execSync } = require("child_process");

/** @type {import("prettier").Options} */
const unsafeConfig = {
    plugins: [
        "prettier-plugin-tailwindcss",
        "@ianvs/prettier-plugin-sort-imports"
    ],

    tailwindFunctions: ["classList"],

    importOrder: ["<THIRD_PARTY_MODULES>", "", "^[~/]", "", "^[./]"]
};

const installed = Array.from(unsafeConfig.plugins).some((plugin) => {
    try {
        execSync(`pnpm list | grep ${plugin}`);
        return true;
    } catch {
        return false;
    }
});

/** @type {import("prettier").Options} */
module.exports = {
    trailingComma: "none",
    tabWidth: 4,
    semi: true,
    singleQuote: false,
    arrowParens: "always",
    printWidth: 80,
    useTabs: false,
    ...(installed ? unsafeConfig : {})
};
