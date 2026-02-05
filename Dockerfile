# Dockerfile

# 1. Use an official Node.js runtime as a parent image
FROM node:20-alpine

# 2. Set the working directory
WORKDIR /app

# 3. Install pnpm
RUN npm install -g pnpm

# 4. Copy package.json and pnpm-lock.yaml first
COPY package.json pnpm-lock.yaml ./

# 5. Install dependencies
RUN pnpm install

# 6. Copy the rest of the application
COPY . .

# 7. Build the Next.js app
RUN pnpm run build

# 8. Expose port
EXPOSE 3000

# 9. Start the application
CMD ["pnpm", "start"]
