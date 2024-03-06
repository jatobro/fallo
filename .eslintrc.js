/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["universe/native", "plugin:prettier/recommended"],
  rules: {
    "import/order": "off",
  },
};
