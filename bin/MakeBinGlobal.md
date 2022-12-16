# Make the .bin folder global in Mac

In order to make the files which are in the `/bin` folder global,
add a `.zshrc` file in `~ usr` folder

```sh
stored=$PWD
source ~/.bash_profile
cd ~/Documents/Projects/zion-network-state/bin
source .bash_profile
cd ${stored}
```
