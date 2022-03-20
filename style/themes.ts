import { DefaultTheme as NavigationDefaultTheme, DarkTheme as NavigationDarkTheme } from '@react-navigation/native';

export const CustomDefaultTheme = {
    ...NavigationDefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        primary: '#ff225c', // Malakite
        secondary: '#12AC5D', // Meadow
        dark_grey: '#707070', // Dove
        grey: '#B4B4B4', // Nobel
        white: '#FAFAFA', // Alabaster
        black: '#111417', // Woodsmoke
        red: '#EE8187',
        text: '#111417',
        button: '#111417',
        buttonText: '#FAFAFA',
        border: '#EAEAEA',
        tags: {
            annualLeave: '#677BE7',
            sickness: '#53B990',
            compassionate: '#EE8187',
            maternity: '#E35DA4',
            wfo: '#FD9D42',
        },
    },
    borderRadius: {
        input: 8,
        card: 8,
        button: 8,
        tag: 4,
    },
};

export const CustomDarkTheme = {
    ...NavigationDarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        primary: '#ff225c', // Malakite
        secondary: '#12AC5D', // Meadow
        dark_grey: '#707070', // Dove
        grey: '#B4B4B4', // Nobel
        white: '#FAFAFA', // Alabaster
        black: '#111417', // Woodsmoke
        red: '#EE8187',
        card: '#111417',
        button: '#FAFAFA',
        buttonText: '#111417',
        border: '#EAEAEA',
        tags: {
            annualLeave: '#677BE7',
            sickness: '#53B990',
            compassionate: '#EE8187',
            maternity: '#E35DA4',
            wfo: '#FD9D42',
        },
    },
    borderRadius: {
        input: 8,
        card: 8,
        button: 8,
        tag: 4,
    },
};
