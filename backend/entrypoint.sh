#!/bin/sh

# Exit script in case of error
set -e

echo "Resetting database..."
npx prisma migrate reset --force

echo "Applying migrations..."
npx prisma migrate deploy

echo "Seeding database..."
npx prisma db seed

echo "Starting application..."
exec "$@"
