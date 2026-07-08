# Background Generator

A simple interactive web application that creates a three-color linear gradient background.

The project starts with the default colors:

- Blue: `#0000ff`
- Yellow: `#ffff00`
- Red: `#ff0000`

Users can change each color manually using the color pickers or generate a completely random gradient.

## Features

- Three HTML color pickers
- Real-time background updates
- Default gradient: blue, yellow, and red
- Random color generation
- Displays the generated CSS gradient value
- Simple interface built with vanilla JavaScript
- No external libraries or dependencies

## Technologies Used

- HTML5
- CSS3
- JavaScript
- DOM manipulation
- Event listeners
- CSS linear gradients

## Project Structure

```text
background-generator/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Default Gradient

The application starts with the following gradient:

```css
linear-gradient(to right, #0000ff, #ffff00, #ff0000);
```

The default color inputs are defined in `index.html`:

```html
<input class="color" type="color" name="color1" value="#0000ff">
<input class="color" type="color" name="color2" value="#ffff00">
<input class="color" type="color" name="color3" value="#ff0000">
```

## How It Works

The application selects the three color inputs using JavaScript and listens for changes with the `input` event.

Whenever a user changes a color:

1. JavaScript reads the three selected color values.
2. A new `linear-gradient()` CSS value is created.
3. The page background is updated immediately.
4. The generated CSS gradient is displayed on the page.

When the **Generate Random Color** button is clicked:

1. Three random hexadecimal colors are generated.
2. The color pickers are updated.
3. A new three-color gradient is applied to the background.
4. The generated CSS value is displayed.

## Running the Project Locally

No installation or dependencies are required.

1. Clone the repository:

```bash
git clone https://github.com/YOUR-USERNAME/YOUR-REPOSITORY-NAME.git
```

2. Open the project folder:

```bash
cd YOUR-REPOSITORY-NAME
```

3. Open `index.html` in your browser.

You can also run the project using the **Live Server** extension in Visual Studio Code.

## JavaScript Concepts Practised

This project demonstrates:

- `document.querySelector()`
- `document.querySelectorAll()`
- Array destructuring
- Arrow functions
- Template literals
- Event listeners
- DOM manipulation
- Updating CSS styles with JavaScript
- Generating random hexadecimal colors

## Example Output

```css
linear-gradient(to right, #3F72AF, #F9ED69, #B83B5E);
```

## Author

**Roxana Ghisoiu**

GitHub: [Roxana-Ghisoiu](https://github.com/Roxana-Ghisoiu)

## License

This project is available for educational and personal use.
