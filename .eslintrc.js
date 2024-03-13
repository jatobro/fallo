/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["universe/native", "prettier"],
  rules: {
    "import/order": "off",
  },
};
