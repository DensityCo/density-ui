# Components - Buttons

Choosing a button style depends on the primacy of the button, the number of containers on screen, and the screen layout

## Button Types

There are four standard types of buttons.

#### Action

Function: Is it important and ubiquitous enough to be an action button?

![Action button](action-button.png)

#### Clear

Layout: Use primarily one type of button per container. Only mix button types when you have a good reason to, such as emphasizing an important function.

![Clear button](clear-button.png)

#### Solid

Dimension: Choose raised or flat depending on the container it will be in and how many z-space layers you have on screen. There should not be many layers of objects on the screen.

![Solid button](solid-button.png)

#### Outlined

Secondary: Use for secondary button features when used in-line with a solid button.

![Outlined button](outlined-button.png)

## Buttons in dialog

Use clear buttons on dialogs to unify the button action with the dialog content.

*   Dialogue text padding: 24dp
*   Dialogue button container height: 52dp
*   Dialogue buttons: 8dp padding from container edges, aliigned to the right of container (for LTR scripts)

![Buttons in dialog](button-dialog.png)

#### Do:

Always use clear buttons for dialogs and when buttons are set side by side. This allows for minimal distraction.

![Button dialog do](button-dialog-do.png)

#### ~~Don't~~:

Solid buttons may become a distraction. Do not use solid buttons in dialogs, especially when they are consecutive.

![Button dialog do](button-dialog-dont.png)
