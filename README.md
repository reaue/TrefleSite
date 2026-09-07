# TrefleSite

A website where you can find informations about random plants and search for specific plants!
![alt text](<SitePhoto.png>)

# Demo

You can try it **[here](https://reaue.github.io/TrefleSite/)** !

# Quick start

You can use the link above to directly go to the website, no installation or your own API key are required.

# Features

This website collect plants data from [trefle.io](https://trefle.io/) API :
- You can search one plants
- If you press the `random plants` button, the site will show you a random plant.
- Display information about the selected plant 
- There is a dark mod and light mod, with a button to switch it
- Save in your selected theme for the next time you open the website

# How to run it locally

Clone the repo and opne the project with a local development server.

```bash
git clone https://github.com/reaue/TrefleSite.git
cd TrefleSite
``` 

Open the project with a local sever. You will need to use an API key (which you can get on [trefle.io](https://trefle.io)) that you should store in `.env` :
```bash
VITE_TREFLE_KEY=your_api_key
```

# How it's work

TrefleSite use the trefle API to get plants data and then update the website.
When you search a plant, the website sends a request  to the API with the selected plant. JS process the data and display the revelant data.
The random plant feature works in a similar way. Except that the website request a random plant with an image from the available data. 

# Credits

I use the API from [trefle.io](https://trefle.io/).