
mnopi
curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/mnopi/mnopi/collaborators/j5pu
curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/j5pu/borrar/collaborators/j5pu

curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/j5pu/borrar/collaborators

gh api
f () { git submodule add "$@" && git add -A && git commit -q -m "auto" && git push -q; }
fetchbranches() { git fetch -q --all; git branch -a; }

repo="bats"
branches="backup"
url="https://github.com/mnopi/${repo}"
f "${url}"
for i in ${branches}; do
  f --branch "${i}" "${url}" "branches/${repo}_${i}"
done
