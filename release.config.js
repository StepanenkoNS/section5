module.exports = {
  branches: "master",
  repositoryUrl: "https://github.com/StepanenkoNS/section5",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "build.zip",
            label: "build"
          },
          {
            path: "coverage.zip",
            label: "coverage"
          }
        ]
      }
    ]
  ]
};
