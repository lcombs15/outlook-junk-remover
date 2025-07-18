#!/bin/bash
set -e

# Ensure cron has all the needed env
export >> /etc/profile

# Confirm timezone
date

# Run right away to auth
npm run main

# Start cron
echo "Starting cron service..." && cron

# Keep container running and show logs
tail -f /var/log/cron.log
