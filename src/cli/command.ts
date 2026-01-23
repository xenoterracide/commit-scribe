// SPDX-FileCopyrightText: Copyright © 2026 Caleb Cushing
//
// SPDX-License-Identifier: GPL-3.0-or-later

import { Command } from "clipanion";

export class CommitMsgCommand extends Command {
  async execute(): Promise<number | void> {
    this.context.stdout.write("hello\n");
    return 0;
  }
}
