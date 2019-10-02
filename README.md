# ImageFade

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.2.2.

The purpose is to show how to do a simple image transition. By pressing a button the
image will fade out, another press and it will fade in again.

app.component.html
We have a div for showing the picture. The picture file is 
configured in app.component.css, which specifies the div's size and 
background image. When clicked the toggle function is called.

app.component.ts
Here is the toggle() function that is called from the html-button. This function
toggles the boolean isVisible, which indicates the state of the animation. 
These states are defined in the @component section. If the boolean is true, we 
give the picture div some values. If it's false, we give it some other values.

When the div is drawed the animation code runs, it also runs when toggle() is called.
The animation code checks the state sent from the div and sets css values accordingly.
How the div changes is defined by the transition functions. 

-----------------------------------------------------------------

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
