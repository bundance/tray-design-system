# Tray.io Design System

## Installing the app

From your terminal, clone the repo from Github, `cd` into the new project directory, and run:

```
yarn
```

This will install all the dependencies needed to run the app.

The app itself is a Component Library comprising components of different levels of complexity, modelled according to the Atomic Design methodology.

## Viewing the Component Library

Once installed, in the project directory, you can run:

### `yarn storybook`

This will run Storybook.<br />
Open [http://localhost:9009/](http://localhost:9009/) to view it in the browser. This will let you browse all of the different components in the component library, and see how they can be combined to create increasingly complex UI components.

## Running Tests

From the project directory, you can run:

### `yarn test`

This launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Documentation

### Atomic Design Component Breakdown

When creating the design system, the Figma designs were cut up into smaller component screenshots. These can be found in the document _"Atomic Design Component Breakdown for Tray.io.pdf"_, which can be found in the documents folder.

### Using Styled System to create themeable Design Tokens

The Component Library uses [Styled-System](https://styled-system.com/) to create a theme that comprises a core set of design tokens based on scales that are mapped onto style props by the styled-system library.

This is a powerful approach to front-design that abstracts away CSS-specific values, and replaces them with generic values that can be used across tools, so that designers using Figma and developers building the code can all use the same values.

These values are combined together into a theme file (/src/theme/theme.js), which contains a theme object that defines all of the tokens and needed by the Design System.

One advantage of this approach is that all of the design tokens are contained in a single file, which acts as a single source of truth, and also makes looking up values more efficient than having to hunt them down.

### Using Styled Components to apply CSS to the components

In addition to Styled-System, the component library uses [Styled Components](https://styled-components.com/), a CSS-in-JS library that Styled-System uses to apply CSS to the components being rendered.

Styled-System provides utility functions that map your theme's design tokens onto props that are then passed to Styled Components, which will turn them into CSS.

### Using Atomic Design to model the Component Library

Brad Frost's Atomic Design methodology has been used to model the components according to their complexity. Following the methodology, the following core components have been created:

#### Atoms

- Box
  A `div` that provides a container with flexible styling

- HorizontalBox
  A styled Box that provides appropriate `flex-box` styles to render the box's items horizontally.

- Text
  A base text component, wrapped in a `span` that other tex-based components can restyle

- HeaderText, MainNavText, HeaderText
  Examples of restyled Text components

- Link
  An <a> element that automatically stops the browser from navigating away from the page when clicked; which fires a onClick event when clicked; and can be flexibly styled.

- Button

#### Molecules

- Logo
- MainNavItem
  A compound component comprising logo, link and chevron icon, with logic that changes the component's styles according to whether the item is hovered over or clicked.

#### Organisms

- Body
  The main body of a page

- Header
  Header title and Button

- Sidebar
  Main Nav Sidebar, featuring the company Logo, and a vertical menu

#### Pages

- Authentication
  Layout example for the Authentication page, showing how the different components in this Design System can come together to create the required UI.

### Creating Themeable components

Both Styled System and Styled Components work together to provide themeable components. The values assigned to the tokens in the theme object in the `theme.js` file can be completely changed in a separete theme object, which can then be used by all the components used here to completely change their styles.

The theme object is passed to Styled Components in its `ThemeProvider` component (to see this in action, see `.storybook/preview.js`). Changing themes is as simple as passing a different theme object into `ThemeProvider`, and can be done either on an app level, or a component-by-component basis.

## Design Decisions

### Choice of Dependencies

There are many libraries that can help build a design system. One gaining great traction at the moment is [ThemeUI](https://theme-ui.com/), which uses the same format for defining themes as Styled System. However, ThemeUI takes things much further and provides its own rich set of components.

Given that this is a test designed to demonstrate skill and knowledge in the Design System space, I felt that ThemeUI did too much out of the box, and so I chose to use Styled System instead. This gave me a framework for creating the Design Systme using themeable tokens, without handing me any components on the plate.

Accordingly, the code you see here has been written entirely by myself, with Styled System and Styled Components simply wiring up the design tokens through to the CSS that's eventually output.

### JavaScript vs TypeScript

My initial thought was to write this using TypeScript. However, given that the test was only to take 4 hours, I decided against this in order to focus more on the functionality of the code and less on its type correctness. In addition, the components are not overly complex, and so TypeScript would be overkill for this particular task.

### Pixel perfect

The theme values adhere to those in Figma as closely as possible. However, sometimes the Figma values produced a result in Storybook that did not match that in Figma. Font weights in particular would sometimes render heavier. When this happened, I opted to go for a value that more closely matched the look of the Figma design rather than its actual value.

## What's missing

- A `Flex` component and a `Spacer` component would both be extremely useful. In many places, flex-box styles were used directly as attributes on the `Box` component, when they would have been better being baked into a `Flex` component. Equally, a `Spacer` component (which adds horizontal or space that's constrained according to the space scale) provides a nice declarative way of providing space between components.

- The Dashboard page

- Many unit tests
  Most of the component would be tested using snapshot testing, as they have little internal logic or state. Accordingly, I ommited many of those for the sake of time.

- The Search bar of the Authentication page

- The content of the Body
