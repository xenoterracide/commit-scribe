// SPDX-FileCopyrightText: Copyright © 2026 Caleb Cushing
//
// SPDX-License-Identifier: MIT

const prettier = "prettier --cache --ignore-unknown --write";
const reuse =
  "reuse annotate --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights --license";

const cc0 = `${reuse} 'CC0-1.0' --fallback-dot-license`;
const mit = `${reuse} 'MIT' --fallback-dot-license`;

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
  "!(package).json": run([cc0, prettier]),
  "package.json": run([mit, prettier]),

  Makefile: run([mit]),
  "*.cjs": run([mit, prettier]),
  "{.config/git/hooks/**,**/*.sh}": run([`${mit} --style python`, prettier]),
  "*.{md,adoc}": run([`${reuse} 'CC-BY-NC-4.0'`, prettier]),
  "*.{xml,yml,yaml,properties,toml,json5,js}": run([cc0, prettier]),
  ".{*ignore,editorconfig,gitattributes,mailmap}": run([cc0, prettier]),

  "*.ts": run([`${reuse} 'GPL-3.0-or-later'`, prettier]),
};

// # SPDX-FileCopyrightText: Copyright © 2024-2026 Caleb Cushing
// #
// # SPDX-License-Identifier: CC0-1.0
//
// # common
// "Makefile":
// - &mit "reuse annotate --license 'MIT' --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights --fallback-dot-license"
// "{.config/git/hooks/*,*.sh}":
// - "reuse annotate --license 'MIT' --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights --style python"
// - &prettier "prettier --cache --ignore-unknown --write"
// "*.{md,adoc}":
// - "reuse annotate --license 'CC-BY-NC-4.0' --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights"
// - *prettier
// "*.{xml,yml,yaml,properties,toml,json5,js}":
// - &cc0 "reuse annotate --license 'CC0-1.0' --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights --fallback-dot-license"
// - *prettier
// ".{editorconfig,gitattributes,mailmap}":
// - *cc0
// - *prettier
// ".*ignore":
// - *cc0
// - *prettier
// "!(package).json":
// - *cc0
// - *prettier
// "package.json":
// - *mit
// - *prettier
// "*.gradle.kts":
// - *mit
// - ktlint --format
// # unique
//
// "*.java":
// - "reuse annotate --license 'GPL-3.0-or-later' --copyright 'Caleb Cushing' --copyright-prefix spdx-string-symbol --merge-copyrights"
// - &prettier "prettier --cache --ignore-unknown --write"
