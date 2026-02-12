# Claude Code Rules for This Project

## ⚠️ CRITICAL: Git & GitHub Safety Rules

### 🚫 NEVER Do These Things:

1. **NEVER run `git lfs migrate import --everything`**
   - This rewrites git history and breaks GitHub sync
   - Only use LFS for NEW files going forward
   - If large files needed, just add to `.gitattributes` and push

2. **NEVER modify global git configs**
   - Global configs affect ALL repositories, not just this one
   - Could break other projects (like seekon.ai)
   - Only use `--local` if config changes needed:
     ```bash
     git config --local setting.name value  # ✅ OK
     git config --global setting.name value # ❌ NEVER
     ```

3. **NEVER rewrite git history on repos already on GitHub**
   - No `git lfs migrate`
   - No `git rebase` on pushed commits
   - No `git commit --amend` on pushed commits
   - No `git filter-branch`

4. **NEVER add random configs while debugging**
   - Especially: compression, pack size, HTTP settings
   - Test with default settings first
   - If changes needed, document WHY and use `--local`

5. **NEVER modify SSH config without asking**
   - Don't add ServerAliveInterval or other settings
   - SSH works fine by default
   - If issues, ask user first

### ✅ ALWAYS Do These Things:

1. **ALWAYS test push before making config changes**
   ```bash
   git push origin main  # Try default first
   ```

2. **ALWAYS check if issue is local or GitHub**
   - Ask user: "Does GitHub work on your other projects?"
   - Compare with working projects (like seekon.ai)
   - Check `git config --list` for differences

3. **ALWAYS use `--local` for project-specific configs**
   ```bash
   git config --local user.name "Paul Denman"  # ✅ OK
   ```

4. **ALWAYS verify you're not breaking things**
   - Before making changes, ask: "Could this affect other projects?"
   - Test in isolation
   - Document what you change

5. **ALWAYS listen to user feedback**
   - If user says "GitHub works on other projects" → It's not GitHub!
   - If user says "X works fine" → Believe them!
   - Check what's different about THIS project

### 🔧 Safe Debugging Process:

When git push fails:

**Step 1: Basic Diagnostics** (Read-only)
```bash
git status
git log --oneline -5
git remote -v
git config --local --list
```

**Step 2: Compare with Working Projects**
- Ask: "Does push work on your other projects?"
- If YES → Problem is local to this repo
- If NO → Might be GitHub/network issue

**Step 3: Check for Local Issues**
```bash
# Check for bad configs
git config --list --show-origin | grep -E "http|pack|compress|lfs"

# Check what's different from origin
git log origin/main..HEAD --oneline

# Check for divergence
git status
```

**Step 4: Try Simple Fixes First**
```bash
# Just retry
git push origin main

# Try different branch name
git push origin HEAD:test-branch
```

**Step 5: If Still Failing - ASK USER**
```
"I see the push is failing. Before making any config changes:
1. Does GitHub work on your other projects?
2. Have you successfully pushed to this repo before?
3. Did anything change recently?

Based on your answers, I'll suggest next steps."
```

**Step 6: Only Then Consider Configs**
- Use `--local` only
- Document each change
- Explain WHY you're making it
- Get user approval first

### 🎯 For Git LFS Issues Specifically:

**If large files need to be added:**

```bash
# ✅ CORRECT way:
echo "*.mp4 filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
echo "*.mp3 filter=lfs diff=lfs merge=lfs -text" >> .gitattributes
git add .gitattributes
git add large-file.mp4
git commit -m "Add large files with LFS"
git push origin main

# ❌ WRONG way:
git lfs migrate import --everything  # NEVER DO THIS
```

**If LFS already misconfigured:**
- DON'T try to fix history
- Create clean branch from origin/main
- Copy current files (not history)
- Make single commit
- Push clean branch

### 📋 Pre-Push Checklist:

Before running `git push`, check:

- [ ] Is working tree clean? (`git status`)
- [ ] Am I ahead of origin? (`git log origin/main..HEAD`)
- [ ] Have I made any global config changes? (If yes, undo them)
- [ ] Does this match how other projects work?
- [ ] Am I forcing a push? (If yes, why? Is it safe?)

### 🚨 Red Flags to Watch For:

If you see these, STOP and ask user:

- `git lfs migrate` command suggested
- `git config --global` being used
- History rewrite commands
- Force push on main branch
- Diverged history (X ahead, Y behind)
- "unexpected disconnect" errors repeating

### 💡 Decision Tree for Push Failures:

```
Push fails?
├─ Does it work on user's other projects (like seekon.ai)?
│  ├─ YES → Problem is LOCAL to this repo
│  │  └─ Check: git config --local --list
│  │  └─ Check: git log origin/main..HEAD
│  │  └─ Look for divergence
│  └─ NO → Might be GitHub or network
│     └─ Check: ssh -T git@github.com
│     └─ Check: GitHub status page
│
├─ Is history diverged?
│  ├─ YES → Create clean branch, copy files, single commit
│  └─ NO → Try simple retry first
│
└─ Still failing?
   └─ Ask user before making ANY config changes
```

### 📝 Commit Message Template:

When committing, always include:
```
Brief description of what changed

- Bullet point details
- What was added/fixed/updated

🤖 Generated with Claude Code
Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

### 🎓 Remember:

1. **GitHub works fine** - It handles millions of repos daily
2. **User feedback is valuable** - "Works on seekon.ai" is a huge clue
3. **Simple is better** - Default configs work for 99% of cases
4. **History rewrites are dangerous** - Especially on synced repos
5. **Global configs are dangerous** - They affect everything

### ✅ What Worked This Time:

```bash
# The solution that worked:
git checkout -b temp-clean-push origin/main
git checkout main -- .
git add -A
git commit -m "Update website with all Dec 5-8 changes..."
git push origin temp-clean-push:main
git checkout main
git reset --hard origin/main
```

**Why it worked**: No history rewrite, no global configs, clean approach

---

## 🔐 Safety Commands Reference:

### Check for problematic configs:
```bash
git config --global --list | grep -E "pack|compress|http|lfs"
```

### Remove bad global configs:
```bash
git config --global --unset setting.name
```

### Check what configs are affecting current repo:
```bash
git config --list --show-origin
```

### Safe way to test push:
```bash
git push --dry-run origin main
```

---

## 🚨 GitHub Push Size Limit Issue (Dec 10, 2025)

### Problem Discovered:
- **Large pushes fail** with "unexpected disconnect while reading sideband packet"
- **Small pushes work fine** (single commits or small batches)
- **Not an IP block** - GitHub API, SSH auth, and fetches all work
- **Network/ISP specific** - Heroku pushes of any size work fine

### Symptoms:
```
send-pack: unexpected disconnect while reading sideband packet
Connection to github.com closed by remote host.
fatal: the remote end hung up unexpectedly
```

### Root Cause:
**Network/ISP throttling or timeout on large uploads to GitHub specifically**
- User IP: 75.73.101.218 (residential ISP)
- Small data transfers work
- Large data transfers timeout/disconnect
- GitHub-specific (Heroku works fine with same data)

### ✅ SOLUTION: Push in Small Batches

**DO NOT try to push all commits at once!** Instead:

```bash
# Method 1: Cherry-pick commits in small groups (3-5 at a time)
git checkout main
git cherry-pick commit1 commit2 commit3
git push origin main

git cherry-pick commit4 commit5 commit6
git push origin main

# Method 2: Push frequently instead of accumulating commits
# After each 1-3 commits, push immediately
git commit -m "Change 1"
git push origin main  # Push right away
```

### 🔍 Diagnostic Steps:

1. **Test if it's a size issue:**
```bash
# Create tiny test commit
echo "test" > test.txt
git add test.txt
git commit -m "Test push"
git push origin main

# If this works but larger pushes fail → Size issue confirmed
```

2. **Check what works vs what doesn't:**
```bash
# These should work:
ssh -T git@github.com          # ✅ SSH auth
gh api rate_limit              # ✅ API access
git fetch origin               # ✅ Pull/fetch
git push origin main           # ❌ Large push (fails)

# Alternative that should work:
git push heroku main           # ✅ Heroku (different service)
```

3. **Verify it's not a general block:**
```bash
curl -I https://github.com     # Should return 200
gh repo view                   # Should show repo info
git ls-remote origin          # Should list refs
```

### 📋 Size Issue Checklist:

When push fails, check:
- [ ] Does a tiny 1-commit push work?
- [ ] Does GitHub API work? (`gh api rate_limit`)
- [ ] Does SSH auth work? (`ssh -T git@github.com`)
- [ ] Does fetch work? (`git fetch origin`)
- [ ] Does Heroku push work? (`git push heroku main`)
- [ ] How many commits trying to push? (`git log origin/main..HEAD --oneline | wc -l`)

If tiny pushes work but large ones fail → **Use incremental push strategy**

### 🎯 Best Practices Going Forward:

1. **Push more frequently** (don't accumulate 20+ commits)
2. **If you have many commits**, cherry-pick in batches of 3-5
3. **Monitor push size** - if 25+ commits, expect potential issues
4. **Alternative workflow**: Create smaller feature branches and merge often

### ⚠️ DO NOT Try These (They Won't Help):

- ❌ Increasing `http.postBuffer` - Doesn't fix the timeout
- ❌ Changing `http.lowSpeedLimit` - ISP issue, not Git config
- ❌ Switching SSH/HTTPS - Both fail the same way
- ❌ Force pushing - Same size, same failure
- ❌ Creating bundles - Can't push them either
- ❌ Git compression settings - Not a compression issue

### 💡 Why This Happens:

**Network path difference:**
- GitHub: Home ISP → GitHub's servers (residential connection, may throttle)
- Heroku: Home ISP → Heroku's servers (different routing, no throttle)

**ISP behavior:**
- Some residential ISPs throttle large uploads to specific services
- Small transfers go through fine
- Large sustained uploads get dropped/timed out

### 📊 Size Limits Observed:

- ✅ 1 commit: Works
- ✅ 3-5 commits: Works
- ❌ 25+ commits: Fails
- ❌ ~236MB pack size: Fails

**Safe zone**: Keep pushes under 5 commits at a time

---

**Last Updated**: December 10, 2025
**Reason**: Discovered GitHub push size/timeout issue with residential ISP
**Key Lesson**: Push frequently in small batches, don't accumulate large changesets
