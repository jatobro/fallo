/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["universe/native"],
  rules: {
    "import/order": "off",
  },
};
