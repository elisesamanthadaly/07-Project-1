# WantADog

<code>AS A hopeful pet owner or bored web developer<br>
I WANT random images of dogs with random names<br>
So I CAN make a list of possible kinds of dogs <br>
to adopt and what to name them<br>
OR BE entertained</code>

---

## Description
[WantADog](https://abnertor.github.io/WantADog/) is a library of doggo pictures and random names to help users find the best doggo-doggo name combinations. The user can click through randomly selected names and dog images, as well as retrieve new name-dog combinations. The user can also save name-dog combinations into a favorites carousel. The application runs in the browser and features dynamically updated HTML and CSS powered by Javascript and jQuery. The favorited name-dog combinations are stored in `localStorage` and are accesible upon page refresh. Name data is retrieved by making `fetch()` calls to the [Namey! API](https://namey.muffinlabs.com/) and the dog images are retrieved from [The Dog API](https://thedogapi.com/).

<img src="./assets/images/spinning_doge.png" alt="Spinning doge" width="100" height="100">

### Features
* When the page loads, a random name and dog image are displayed. The favorites carousel displays a placeholder spinning doge image.
* When the user clicks the "Name" button a new doggo name a retrieved.
* When the user clicks the "Doggo" button a new doggo image a retrieved.
* When the user clicks the "New Combo" button a new combination of doggo name and doggo image are retrieved.
* When the user clicks the "Save Current Combo" button, the current doggo name/image combination  is saved to Favorites and stored as an object in an array in `localStorage`
* When the user clicks the "Prev" and "Next" buttons, they can click through their favorite dog/name combinations, which are stored in `localStorage`.
* When the user clicks the "Clear" button to clear previously saved favorites, which clears `localStorage`.
* Duplicates are prevented by preventing the user from saving the last saved combo when clicked multiple times.

### Future Developments
* Adding a "share" function so that name-doggo combinations can be downloaded and/or shared with friends and family
* Improving Mobile UI/UX 

## Usage
Deployed link to live site can be found at: https://abnertor.github.io/WantADog/

The page has the following appearance and functionality:
![Screencast gif of app](./assets/images/screencast.gif)


## Technologies Used

* HTML
* CSS
* [Tailwind](https://tailwindcss.com/)
* JavaScript/jQuery
* Google Fonts
* Font Awesome Icons


## Credits

<b>APIs</b>
* [The Dog API](https://thedogapi.com/): Used to return randomized dog image URLs
* [Namey!](https://namey.muffinlabs.com/): Used to return random names the from US Census Bureau database 

<b>Images</b>
* [Background image](https://longwallpapers.com/doge-wallpaper-high-quality/doge-wallpaper-high-quality-for-desktop-wallpaper/)
* [Favorites doge gif](https://classical-doge.tumblr.com/)
* [Doge favicon](https://www.favicon.cc/?action=icon&file_id=671697)


## License

MIT License

Copyright (c) 2021 [Jackie Alvarez](https://github.com/jaque-leen), [Elise Daly](https://github.com/elisesamanthadaly), [Suejin Kim](https://github.com/suejinkim20), [Abner Toribio](https://github.com/AbnerTor)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.