// SPDX-FileCopyrightText: Copyright © 2025, 2026 Caleb Cushing
//
// SPDX-License-Identifier: CC0-1.0

/** @type {import('prettier').Options} */
module.exports = {
  printWidth: 120,
  plugins: [require.resolve("prettier-plugin-toml"), require.resolve("prettier-plugin-sh")],
};
