## Deployment & Finish Workflow

This repository uses GitHub as the source of truth and Cloudflare Workers for production deployment.

### Git remotes

- `origin` = GitHub repository:
  `https://github.com/chelseazhao115-rgb/chelsea-portfolio.git`
- `sites` = legacy ChatGPT Sites remote, kept only as backup/history.
- Do NOT push normal website updates to `sites`.
- Do NOT create or redeploy a ChatGPT Sites project unless the user explicitly requests it.

### Standard finish workflow

After completing any website code or content change:

1. Review the changed files and make sure no unrelated files were modified.
2. Run:
   - `npm run build`
   - `npm test`
   - `npm run lint`
3. If any required check fails:
   - do NOT commit
   - do NOT push
   - fix the issue if it is within the current task scope
   - rerun the checks
   - if it still cannot be resolved safely, stop and report the failure to the user
4. Only after all required checks pass:
   - run `git status`
   - create one concise commit describing the completed task
   - push the current `main` branch to `origin`
5. After push, verify:
   - the working tree is clean
   - local `main` and `origin/main` are aligned
   - there are no unpushed commits
6. Cloudflare is connected to GitHub `main` and handles production deployment automatically.
   - Do NOT manually redeploy Cloudflare unless specifically necessary
   - Do NOT create a new Cloudflare project for ordinary updates
7. If Cloudflare build/deployment status is available, check it and report whether deployment succeeded, failed, or is still in progress.

### Safety rules

- Do not force push.
- Do not rewrite or amend existing history unless explicitly requested.
- Do not create a new Git branch for ordinary small website updates unless requested.
- Do not change deployment architecture, Vinext, Vite, Cloudflare, or Next.js configuration unless the task specifically requires it.
- Do not migrate to Vercel or another hosting provider without explicit approval.
- Do not delete the `sites` remote unless explicitly requested.
- Do not commit secrets, API keys, `.env` files, local caches, build artifacts, or machine-specific files.
- Do not claim deployment succeeded until it is actually confirmed.

### Default task completion behavior

For normal personal website modifications, the default behavior should be:

Edit
→ validate
→ build/test/lint
→ commit
→ push to GitHub `main`
→ let Cloudflare auto-deploy
→ report commit SHA and deployment status

The user should not need to separately ask for commit or deployment after each normal website modification.

### Final response format

After completing a normal website update, briefly report:

- what changed
- test/build/lint results
- Git commit SHA/message
- GitHub push status
- Cloudflare deployment status
- any manual checks the user should perform

This workflow is the default unless the user explicitly says:

- do not commit
- do not push
- do not deploy
- only inspect / plan / review
