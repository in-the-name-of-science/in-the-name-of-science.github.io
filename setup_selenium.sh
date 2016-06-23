sudo apt-get install openjdk-6-jre-headless 
sudo apt-get install xfonts-100dpi xfonts-75dpi xfonts-scalable xfonts-cyrillic
sudo apt-get install xvfb
sudo apt-get install xserver-xorg-core
sudo apt-get install firefox
wget http://selenium.googlecode.com/files/selenium-server-standalone-2.31.0.jar
Xvfb :0 -screen 0 1024x768x24 2>&1 >/dev/null &
export DISPLAY=:0
nohup xvfb-run java -jar selenium-server-standalone-2.31.0.jar > selenium.log &