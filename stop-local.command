#!/bin/bash
if pkill -f "vite --host" 2>/dev/null; then
  echo "Local dev server stopped."
else
  echo "No local dev server is running."
fi
sleep 1
