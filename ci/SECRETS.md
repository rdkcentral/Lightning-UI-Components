# Managing Secrets in Vault

Concourse secrets are managed in Vault. Our GHE group is `lightning`; to view/manage secrets via UI, head to https://or.vault.comcast.com/ui/vault/secrets/secret/list/lightning/concourse-ci/.

## Login via UI

https://or.vault.comcast.com/ui/

1. Leave **Namespace** blank
2. Choose oidc as the method
3. Enter `lightning_ci-owners_users` or `lightning_ci-owners_groups` as the role
4. Click **Sign in with OIDC Provider**

## Login via CLI

Managing secrets via the Vault CLI is pretty risky but if you _really_ want to...

The Vault CLI can be downloaded here: https://www.vaultproject.io/docs/commands

1. Set new address as export VAULT_ADDR=https://or.vault.comcast.com
2. Find out what your ${GHE_ORG} is. This is your (GHE Organization)/(Concourse Team) (our GHE org is `lightning`)
3. If your “user” has access, try vault login -method=oidc role=${GHE_ORG}_ci-owners_users
4. If your “group” as access, try vault login -method=oidc role=${GHE_ORG}_ci-owners_groups

## Managing Users and Groups

All of the users and groups for vault are managed in a single repo. You can find the info for the `lightning` org here:  https://github.comcast.com/TP-PSP/VaultPolicies/blob/main/organizations/lightning/oidc/mapping.hcl. To add/remove users/groups, make a PR against this repo.