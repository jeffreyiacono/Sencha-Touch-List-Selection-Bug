Sencha Touch 2 app demonstrating the selection bug as raised at: http://www.sencha.com/forum/showthread.php?161565-List-selected-on-store-reload&p=698200#post698200

##Selection Bug
1. Select a given item from the list (ex. "Prancer")
   ![select list item](https://lh4.googleusercontent.com/-CMEmvu1LMk4/TvZ5BIY5bTI/AAAAAAAAAd0/3YlYEXn-K3c/s720/Screen%252520shot%2525202011-12-24%252520at%2525207.05.45%252520PM.png)
2. Click the refresh button
3. After loading has completed, select another list item (ex. "Comet")
   ![select another list item](https://lh6.googleusercontent.com/-R9GsBurN0LU/TvZ5BCf_3-I/AAAAAAAAAdw/y3HG0Z0pdg8/s720/Screen%252520shot%2525202011-12-24%252520at%2525207.05.34%252520PM.png)

Both will we displayed as active, while we would expect the list to clean itself
up after reloading.

##Bootstrap App

Clone this repo into a new directory:

`$ mkdir sencha-touch-list-selection-bug && cd $_`

`$ git clone git://github.com/jeffreyiacono/Sencha-Touch-List-Selection-Bug.git`

If you are using [rvm] the repo contains a default `/.rvmrc` file that uses a project setup of `ruby-1.9.2@st-list-reload-issue`. Change as needed.

Next install [Sinatra] to serve up the app:

`$ gem install sinatra`

Now boot up the app:

`$ ruby -rubygems app.rb`

<code>
[2011-12-24 16:27:55] INFO  WEBrick 1.3.1<br>
[2011-12-24 16:27:55] INFO  ruby 1.9.2 (2011-07-09) [x86_64-darwin10.8.0]<br>
== Sinatra/1.3.1 has taken the stage on 4567 for development with backup from WEBrick<br>
[2011-12-24 16:27:55] INFO  WEBrick::HTTPServer#start: pid=12269 port=4567
</code>

Finally visit http://0.0.0.0:4567

  [rvm]: http://beginrescueend.com/
  [sinatra]: http://sinatrarb.com
