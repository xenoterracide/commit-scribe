// SPDX-FileCopyrightText: Copyright © 2026 Caleb Cushing
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Cli } from "clipanion";
import { argv } from "node:process";
import { CommitMsgCommand } from "./command.js";

const [node, app, ...args] = argv;

const cli = new Cli({
  binaryLabel: `My Application`,
  binaryName: `${node} ${app}`,
  binaryVersion: `1.0.0`,
});

cli.register(CommitMsgCommand);
cli.runExit(args);
