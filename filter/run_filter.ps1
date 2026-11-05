# jev topic filter - drop AI / tech / coding posts from X creator archives
#
#   pwsh -File run_filter.ps1 -Limit 20 -DryRun    # inspect the request, no API call
#   pwsh -File run_filter.ps1 -Limit 100           # cheap trial run
#   pwsh -File run_filter.ps1                      # full run over every post
#   pwsh -File run_filter.ps1 -Provider openrouter # or typesafe / cloudflare

param(
  [string]$Src = 'C:/Users/xiaohanchen/Master/Projects/x_creators/accounts',
  [string]$Work = $PSScriptRoot,
  [int]$Limit = 0,
  [int]$Concurrency = 8,
  [string]$Provider = '',
  [switch]$DryRun
)

$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $Work
$Out = Join-Path $Work 'out'

Write-Host '[1/4] splitting posts'
node (Join-Path $Work 'split_posts.mjs') $Src (Join-Path $Work 'posts.jsonl')

$inputFile = Join-Path $Work 'posts.jsonl'
if ($Limit -gt 0) {
  $inputFile = Join-Path $Work 'posts.trial.jsonl'
  Get-Content -LiteralPath (Join-Path $Work 'posts.jsonl') -TotalCount $Limit | Set-Content -LiteralPath $inputFile -Encoding utf8
  Write-Host ('trial rows: ' + $Limit)
}

$judged = Join-Path $Work 'judged.jsonl'
$labelsJson = Join-Path $Work 'labels.json'

$jev = @('batch', 'classify', '-i', $inputFile, '--labels-json', ('@' + $labelsJson), '--concurrency', "$Concurrency")
if ($DryRun) { $jev = @('--dry-run') + $jev } else { $jev += @('-o', $judged) }
if ($Provider) { $jev = @('-P', $Provider) + $jev }
$jev += @('--', '--multi', '--threshold', '0.5', '--instructions', 'Judge which topic categories this X post belongs to. Judge the subject matter only. If a post mentions an AI tool but the main point is personal life, label it life. Several categories may apply to one post.')

Write-Host '[2/4] jev classify'
Write-Host ('jev ' + ($jev -join ' '))
& jev @jev
Write-Host ('jev exit code = ' + $LASTEXITCODE)
if ($DryRun) { exit 0 }

Write-Host '[3/4] partitioning keep / drop'
$ok = Join-Path $Work 'judged_ok.jsonl'
$keep = Join-Path $Work 'keep.jsonl'
$drop = Join-Path $Work 'drop.jsonl'
$tech = 'any(. == "ai" or . == "deepdev" or . == "techbiz")'

jq -c 'select(.ok)' $judged | Set-Content -LiteralPath $ok -Encoding utf8
jq -c ('select(.ok) | select((.result.applied // []) | ' + $tech + ')') $ok | Set-Content -LiteralPath $drop -Encoding utf8
jq -c ('select(.ok) | select(((.result.applied // []) | ' + $tech + ') | not)') $ok | Set-Content -LiteralPath $keep -Encoding utf8

Write-Host ('kept rows:  ' + ((Get-Content -LiteralPath $keep).Count))
Write-Host ('dropped rows: ' + ((Get-Content -LiteralPath $drop).Count))

Write-Host '[4/4] reassembling markdown'
node (Join-Path $Work 'reassemble.mjs') $Src $judged $Out

Write-Host 'done'
Write-Host ('clean ->   ' + (Join-Path $Out 'clean'))
Write-Host ('dropped -> ' + (Join-Path $Out 'dropped'))
