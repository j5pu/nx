
mnopi
curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/mnopi/mnopi/collaborators/j5pu
curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/j5pu/borrar/collaborators/j5pu

curl   -H "Accept: application/vnd.github.v3+json" -H "Authorization: token ${GH_TOKEN}"   https://api.github.com/repos/j5pu/borrar/collaborators

gh api

fetchbranches() { git fetch -q --all; git branch -a; }

f () {
  path="$4"
  test $# -ne 1 || path="$(basename "$1" .git)"
  git submodule add "$@" && \
  git config --file .gitmodules "submodule.${path}.fetchRecurseSubmodules" true && \
  git add -A && \
  git commit -q -m "auto" && \
  git push -q;
}

for repo in shenv; do
  url="https://github.com/mnopi/${repo}"
  f "${url}"
done

branches="justincase"
for i in ${branches}; do
  f --branch "${i}" "${url}" "branches/${repo}_${i}"
done


for i in scan; do
  archive $i
done


for i in a-file-icon-idea-extend critic nextra pycharm PyProjectToml; do
  delete $i
done
