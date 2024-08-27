import * as React from "react";
import { CopyBlock } from "react-code-blocks";

export interface SSHSetupProps {}

export const SSHSetup: React.FC<SSHSetupProps> = () => {
  return (
    <div>
      <div>
        <h3>Setel SSH</h3>
        <CopyBlock
          text={`
GIT_USER_NAME='richard-hungngo'
GIT_USER_EMAIL='richard.hungngo@setel.com'

rm -rf $HOME/.ssh/id_rsa $HOME/.ssh/id_rsa.pub
ssh-add -D # need to clear ssh-agent
echo 'Setel - Cleaned ssh keys'

cp $HOME/.ssh/setel_id_rsa $HOME/.ssh/id_rsa
cp $HOME/.ssh/setel_id_rsa.pub $HOME/.ssh/id_rsa.pub
echo 'Setel - Switched to setel ssh key'

git config --global user.name $GIT_USER_NAME
git config --global user.email $GIT_USER_EMAIL

export SETEL_PLATFORM_API_USERNAME=admin
export SETEL_PLATFORM_API_PASSWORD=maePheishej1goo

echo "Setel - Git global config changed to $GIT_USER_NAME & $GIT_USER_EMAIL"

export NPM_AUTH_TOKEN=f1ef306a-fb79-4a8f-a2a6-4cf702d45db5
export AWS_PROFILE=setel

echo 'Setel - Updated environment variables'
          `}
          showLineNumbers={true}
          language={"JScript"}
          codeBlock
        />
      </div>
      <div>
        <h3>Sotatek SSH</h3>
        <CopyBlock
          text={`
GIT_USER_NAME='Sotatek-HungNgo3'
GIT_USER_EMAIL='hung.ngo3@sotatek.com'

rm -rf $HOME/.ssh/id_rsa $HOME/.ssh/id_rsa.pub
ssh-add -D # need to clear ssh-agent
echo 'Sotatek - Cleaned ssh keys'

cp $HOME/.ssh/sotatek_id_rsa $HOME/.ssh/id_rsa
cp $HOME/.ssh/sotatek_id_rsa.pub $HOME/.ssh/id_rsa.pub
echo 'Sotatek - Switched to sotatek ssh key'

git config --global user.name $GIT_USER_NAME
git config --global user.email $GIT_USER_EMAIL

echo "Sotatek - Git global config changed to $GIT_USER_NAME & $GIT_USER_EMAIL"

echo 'Sotatek - Updated environment variables'
          `}
          showLineNumbers={true}
          language={"JScript"}
          codeBlock
        />
      </div>
      <div>
        <h3>Richard SSH</h3>
        <CopyBlock
          text={`
GIT_USER_NAME='viethung-512'
GIT_USER_EMAIL='ngohung05121997.dev@gmail.com'

rm -rf $HOME/.ssh/id_rsa $HOME/.ssh/id_rsa.pub
ssh-add -D # need to clear ssh-agent
echo 'Richard - Cleaned ssh keys'

cp $HOME/.ssh/personal_id_rsa $HOME/.ssh/id_rsa
cp $HOME/.ssh/personal_id_rsa.pub $HOME/.ssh/id_rsa.pub
echo 'Richard - Switched to personal ssh key'

git config --global user.name $GIT_USER_NAME
git config --global user.email $GIT_USER_EMAIL

echo "Richard - Git global config changed to $GIT_USER_NAME & $GIT_USER_EMAIL"

echo 'Richard - Updated environment variables'
          `}
          showLineNumbers={true}
          language={"JScript"}
          codeBlock
        />
      </div>
    </div>
  );
};
