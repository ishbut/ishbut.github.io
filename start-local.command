#!/bin/bash
cd "$(dirname "$0")" || exit 1
echo "Starting local dev server..."
npm run dev
