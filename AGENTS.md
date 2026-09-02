<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Deployment — Dokploy is the ONLY default (SSH prohibited without permission)

- **Default for every deploy, vhost, compose redeploy, log fetch, and prod check is Dokploy via `https://manage.shrijit.tech` (MCP `dokploy` / `tools.dokploy.*`).** Never run `ssh ubuntu@130.210.29.215`, `ssh -J`, `scp`, `rsync -e ssh`, or `ssh`-tunneled `curl --resolve` as the first resort. Prefer `dokploy` MCP: `project.all`, `application.*`, `compose.*`, `docker.*`, `traefik` reads, `dokploy-mcp.sh` tools. For docs, use `find-docs` (`dokploy`) or `DEPLOYING-A-NEW-SERVICE.md`.
- **SSH to `130.210.29.215` is PROHIBITED without explicit per-task user permission.** If you think SSH is the only way (host `nginx -t`, `docker volume sudo` inspection, `journalctl`, `ufw`, bare-metal `systemd`), you MUST call `question` first: e.g. `SSH to 130.210.29.215 required to <reason> — approve? [Yes/No]` and wait for `Yes`. No silent `shell(ssh ...)` or `shell(sudo ssh ...)`.
- When permission is granted: use read-only first (`ssh ... ls`, `cat`, `docker ps`, `docker logs --tail`), narrate the write before doing it, and prefer the `ssh-remote-connection` skill when available. Log the permission in the task transcript.
- Keep `livesync`/`couchdb`/`obsidian-sync` DNS as `A 130.210.29.215 proxied:false`; do not change Cloudflare via raw API without user approval — use Dokploy's Cloudflare integration where possible.
- This rule overrides any older doc that says `ssh ubuntu@...` is the default (e.g. `Knowledge/Obsidian_LiveSync_SelfHosted.md:161` `ssh` examples are now legacy — keep them as reference but prepend `Requires user-approved SSH`).
