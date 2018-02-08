#!/usr/bin/env bash

appname=$(basename -s .git `git config --get remote.origin.url`)

txtund=$(tput sgr 0 1)          # Underline
txtbld=$(tput bold)             # Bold
grn=$(tput setaf 2)             # Green
red=$(tput setaf 1)             # Red
bldgrn=${txtbld}$(tput setaf 2) # Bold Green
bldred=${txtbld}$(tput setaf 1) # Bold Red
txtrst=$(tput sgr0)             # Reset

usage()
{
cat << EOF
iNQ Website
${txtbld}SYNOPSIS${txtrst}
    $0 deploy
${txtbld}DESCRIPTION${txtrst}
    ${txtbld}deploy${txtrst}
        Builds and deploys website to an s3 bucket.
        Usage: ./${appname}.sh deploy ${txtrst}
EOF
exit 1
}

echo_message() {
    echo "${bldgrn}[${appname}]${txtrst} ${grn}$1${txtrst}"
}

echo_error() {
    echo "${bldred}[${appname}]${txtrst} ${red}$1${txtrst}"
}

echo_line() {
    echo
    echo "${bldred}====================================================================================================>${txtrst}"
    echo
}

abort_on_error() {
    if [[ $? -ne 0 ]]; then
        echo_error "$1"
        exit 1
    fi
}

deploy() {
    bundle install
    bundle exec jekyll build
    aws s3 sync _site s3://i-nq.com.au/ --delete
    aws cloudfront create-invalidation --distribution-id $1 --paths '/*'
}

if [[ $# -eq 0 ]]; then
    usage

elif [ $1 = "deploy" ]; then
    deploy

else
  usage
fi
