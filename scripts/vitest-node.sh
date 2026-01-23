#!/usr/bin/env bash

# SPDX-FileCopyrightText: Copyright © 2026 Caleb Cushing
#
# SPDX-License-Identifier: MIT

set -euo pipefail

workspace_dir="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

export NODE_OPTIONS="--require ${workspace_dir}/.pnp.cjs ${NODE_OPTIONS-}"

exec node "$@"
