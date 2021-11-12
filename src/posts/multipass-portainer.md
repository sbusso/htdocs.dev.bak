---
layout: layouts/base
title: Multipass with Portainer
description: How to replace Docker Desktop with Portainer
date: 2021-11-12
tags: ['posts', 'portainer', 'multipass', 'docker']
---


Install multipass: [https://multipass.run/](https://multipass.run/)


```shell
multipass launch --name ubuntu-docker --cloud-init docker.yaml
```


```yaml
#cloud-config
---
users:
  - name: ubuntu
    sudo: ALL=(ALL) NOPASSWD:ALL
    ssh-authorized-keys:
      - ssh-rsa AAAAB3Nza....
package_update: true
packages:
  - docker
  - avahi-daemon
  - apt-transport-https
  - ca-certificates
  - curl
  - gnupg
  - lsb-release
runcmd:
  - sudo curl -fsSL https://get.docker.com | sudo bash
  - sudo systemctl enable docker
  - sudo systemctl enable -s HUP ssh
  - sudo groupadd docker
  - sudo usermod -aG docker ubuntu
  - docker volume create portainer_data
  - docker network create portainer
  - docker run -d -p 8000:8000 -p 9000:9000 --name=portainer --net portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
```

