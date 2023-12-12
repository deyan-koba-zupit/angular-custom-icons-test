# Angular Custom Icons With Fantasticon
Welcome to the Angular Custom Icons project powered by [Fantasticon](https://github.com/tancredi/fantasticon). This repository serves as a comprehensive guide on leveraging Fantasticon to effortlessly generate custom font icons within Angular projects.

## Setup

To get started, install the necessary dependencies by running:
```
npm install
```

Launch the development server with the following command:
```
ng start
```

Navigate to `http://localhost:4200/` to preview your application.

## Utilizing Custom Icons

This project comes pre-loaded with a selection of custom SVG icons located in `src/app/assets/svg-icons`. These icons serve as the foundation for generating a custom font, conveniently stored in `src/app/assets/font-icons`. The font itself is imported in `index.html`.

To integrate these icons into your application, utilize the enum defined in `src/app/assets/font-icons/icons.ts`. Enum values can be passed to the `zu-icon` component for seamless rendering.

### Example Usage
HTML:
```
<zu-icon [icon]="zuTypescript" />
```

TS:
```
import { Icons } from '../assets/font-icons/icons';

readonly zuTypescript = Icons.Typescript;
```

## Adding icons
Expanding the icon set is a straightforward process. To introduce a new icon, place its corresponding SVG file in the `src/app/assets/svg-icons` folder. Subsequently, execute the command:

```
npm run generate-icons
```

That's it! This command will automatically update the enum and the font file, ensuring seamless integration of your newly added icon into the project.
