// SPDX-FileCopyrightText: Copyright © 2026 Caleb Cushing
//
// SPDX-License-Identifier: MIT

const prettier = "prettier --cache --ignore-unknown --write";
const reuse =
  "reuse annotate --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights --license";

const withoutYarn = (files) => files.filter((file) => !file.includes("/.yarn/") && !file.startsWith(".yarn/"));

const withFiles = (command, files) => `${command} ${files.map((file) => `"${file.replace(/"/g, '\\"')}"`).join(" ")}`;

const run = (commands) => (files) => {
  const filtered = withoutYarn(files);

  if (!filtered.length) {
    return [];
  }

  return commands.map((command) => withFiles(command, filtered));
};

module.exports = {
  "**/*.ts": run([`${reuse} 'GPL-3.0-or-later'`, prettier]),

  // All JSON except package.json
  "**/*.json": run([`${reuse} 'CC0-1.0' --force-dot-license`, prettier]),
  "package.json": run([`${reuse} 'MIT' --force-dot-license`, prettier]),

  Makefile: run([`${reuse} 'MIT'`]),
  "**/*.cjs": run([`${reuse} 'MIT'`]),

  "{.config/git/hooks/**,**/*.sh}": run([`${reuse} 'MIT' --style python`, prettier]),

  "**/*.{md,adoc}": run([`${reuse} 'CC-BY-NC-4.0'`, prettier]),

  "**/*.{xml,yml,yaml,properties,toml,json5,js}": run([`${reuse} 'CC0-1.0'`, prettier]),
  "**/*ignore": run([`${reuse} 'CC0-1.0'`, prettier]),
  ".editorconfig": run([`${reuse} 'CC0-1.0'`, prettier]),
  ".gitattributes": run([`${reuse} 'CC0-1.0'`, prettier]),
  ".mailmap": run([`${reuse} 'CC0-1.0'`, prettier]),
};
