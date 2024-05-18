FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
COPY . .
WORKDIR .

RUN pnpm install
RUN pnpm run build

EXPOSE 4173
CMD [ "pnpm", "preview" ]