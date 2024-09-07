import * as React from "react";
import { CopyBlock } from "react-code-blocks";

export interface UbuntuApplicationInstallerProps {}

export const UbuntuApplicationInstaller: React.FC<
  UbuntuApplicationInstallerProps
> = () => {
  return (
    <div>
      <CopyBlock
        text={`      
#!/bin/bash

# Update and upgrade the system
sudo apt update && sudo apt upgrade -y

# Install basic utilities
sudo apt install -y curl wget git vim

# Install libfuse2 for AppImage support
sudo apt install -y libfuse2

# Install specific applications
sudo apt install -y gnome-tweaks
sudo apt install -y build-essential
sudo apt install -y snapd
sudo snap install code --classic  # Install Visual Studio Code
sudo snap install postman
sudo snap install telegram-desktop

# Install Docker
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker

# Add your user to the docker group
sudo usermod -aG docker $USER

# Install Docker Compose
DOCKER_COMPOSE_VERSION="2.20.2"
sudo curl -L "https://github.com/docker/compose/releases/download/v\${DOCKER_COMPOSE_VERSION}/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Verify Docker Compose installation
docker-compose --version

# Install Go (Golang)
GO_VERSION="1.21.1"
wget https://go.dev/dl/go\${GO_VERSION}.linux-amd64.tar.gz
sudo rm -rf /usr/local/go
sudo tar -C /usr/local -xzf go\${GO_VERSION}.linux-amd64.tar.gz

# Set up Go environment variables
echo "export PATH=$PATH:/usr/local/go/bin" >> ~/.profile
source ~/.profile

# Verify Go installation
go version

# Install Node.js and npm (via nvm)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm install --lts

# Install Python and pip
sudo apt install -y python3-pip

# Install OpenJDK (Java Development Kit)
sudo apt install -y openjdk-17-jdk

# Verify Java installation
java -version
javac -version

# Install Google Chrome
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install -y ./google-chrome-stable_current_amd64.deb
rm google-chrome-stable_current_amd64.deb

# Install JetBrains Toolbox
curl -L "https://data.services.jetbrains.com/products/download?platform=linux&code=TBA" -o jetbrains-toolbox.tar.gz
sudo tar -xzf jetbrains-toolbox.tar.gz -C /opt
sudo mv /opt/jetbrains-toolbox-* /opt/jetbrains-toolbox
/opt/jetbrains-toolbox/jetbrains-toolbox &

# Wait for JetBrains Toolbox to install
echo "Please complete the installation of JetBrains Toolbox. Press any key to continue after the installation is complete..."
read -n 1 -s

# Install zsh and make it the default shell
sudo apt install -y zsh
chsh -s $(which zsh)

# Install zsh-autosuggestions plugin && add zsh-autosuggestions plugin to .zshrc
git clone https://github.com/zsh-users/zsh-autosuggestions ~/.zsh/zsh-autosuggestions
echo "source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh" >> ~/.zshrc

# Install powerlevel10k && add to .zshrc
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ~/powerlevel10k
echo 'source ~/powerlevel10k/powerlevel10k.zsh-theme' >>~/.zshrc

# Apply zsh configuration
source ~/.zshrc

# Install ibus-bamboo
sudo add-apt-repository ppa:bamboo-engine/ibus-bamboo
sudo apt update
sudo apt install -y ibus ibus-bamboo --install-recommends

# Set up ibus-bamboo
ibus restart

# Reboot to apply changes
echo "Installation complete. Rebooting..."
sudo reboot
      `}
        showLineNumbers={true}
        language={"JScript"}
        codeBlock
      />
    </div>
  );
};
