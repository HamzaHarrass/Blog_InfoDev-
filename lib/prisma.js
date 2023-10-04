const { PrismaClient } = require('@prisma/client')

export const prisma =
  new PrismaClient({
    //log is only enabled in development its for debugging purposes, result of debug is printed in console
    log: ['query', 'info', 'warn', 'error'],
    errorFormat: 'pretty',
  });
