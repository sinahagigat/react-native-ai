const colors = {
  white: '#fff',
  black: '#000',
  gray: 'rgba(0, 0, 0, .5)',
  lightWhite: 'rgba(255, 255, 255, .5)',
  blueTintColor: '#0281ff',
  lightPink: '#F7B5CD'
}

const lightTheme = {
  name: 'Light',
  label: 'light',
  textColor: colors.black,
  secondaryTextColor: colors.white,
  mutedForegroundColor: colors.gray,
  highlightedTextColor: colors.white,
  backgroundColor: colors.white,
  placeholderTextColor: colors.gray,
  secondaryBackgroundColor: colors.black,
  borderColor: 'rgba(0, 0, 0, .15)',
  buttonTextColor: colors.white,
  tintColor: '#0281ff',
  tabBarActiveTintColor: colors.black,
  tabBarInactiveTintColor: colors.gray,
}

const darkTheme = {
  name: 'Dark',
  label: 'dark',
  textColor: colors.white,
  secondaryTextColor: colors.black,
  mutedForegroundColor: colors.lightWhite,
  highlightedTextColor: colors.black,
  backgroundColor: colors.black,
  placeholderTextColor: colors.lightWhite,
  laceholderTextColor: colors.lightWhite,
  secondaryBackgroundColor: colors.white,
  borderColor: 'rgba(255, 255, 255, .2)',
  buttonTextColor: colors.white,
  tintColor: '#0281ff',
  tabBarActiveTintColor: colors.blueTintColor,
  tabBarInactiveTintColor: colors.lightWhite,
}

const hackerNews = {
  ...lightTheme,
  name: 'Hacker News',
  label: 'hackerNews',
  backgroundColor: '#e4e4e4',
  tintColor: '#ed702d',
}

const miami = {
  ...darkTheme,
  name: 'Miami',
  label: 'miami',
  backgroundColor: '#231F20',
  tintColor: colors.lightPink,
  buttonTextColor: '#231F20',
  tabBarActiveTintColor: colors.lightPink
}

const vercel = {
  ...darkTheme,
  name: 'Vercel',
  label: 'vercel',
  backgroundColor: 'black',
  tintColor: '#171717',
  buttonTextColor: 'white',
  tabBarActiveTintColor: 'white',
  secondaryTextColor: 'white',
  highlightedTextColor: 'white'
}

export {
  lightTheme, darkTheme, hackerNews, miami, vercel
}