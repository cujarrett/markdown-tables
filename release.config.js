const changelogTitle = `# Changelog
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).`

module.exports = {
  branches: ["main"],
  tagFormat: "v${version}",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    ["@semantic-release/changelog", { changelogTitle }],
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github",
    ["@semantic-release/exec", {
      verifyReleaseCmd: "echo \"VERSION=${nextRelease.version}\" > RELEASE.env"
    }]
  ],
  debug: true
}
