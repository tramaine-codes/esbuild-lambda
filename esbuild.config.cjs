module.exports = () => {
  return {
    packager: "npm",
    platform: "node",
    format: "esm",
    bundle: true,
    minify: false,
    sourcemap: true,
    keepNames: true,
    external: ["oracledb"],
  };
};
