
# react-hooky

[![Greenkeeper badge](https://badges.greenkeeper.io/cloudever/react-hooky.svg)](https://greenkeeper.io/)

[![NPM](https://nodei.co/npm/react-hooky.png?compact=true)](https://nodei.co/npm/react-hooky/)

## Why?

Since the appearance of hooks in React, many packages have been published for various purposes, and in a reason to not pull many new small dependencies, most of them are combined in this package through re-export.

This package proxies dependencies and does not need to be compiled. It build upon ES Modules for `webpack` and `rollup` support and tree-shaking.

## Install

Using Yarn

```
yarn add react-hooky
```

or NPM

```
npm install react-hooky
```

## Exports

### [the-platform](https://github.com/palmerhq/the-platform)

 - `<Audio /> `
 - `<Preload /> `
 - `<Script /> `
 - `<Stylesheet /> `
 - `<Video /> `
 - `useDeviceMotion`
 - `useDeviceOrientation`
 - `useGeoPosition`
 - `useIntersectionObserver`
 - `useMedia`
 - `useNetworkStatus`
 - `useWindowScrollPosition`
 - `useWindowSize`

### [react-use](https://github.com/streamich/react-use)

- `useAudio`
- `useBattery`
- `useCounter`
- `useCss`
- `useFavicon`
- `useGeolocation`
- `useHover`
- `useIdle`
- `useLifecycles`
- `useList`
- `useLocalStorage`
- `useLocation`
- `useLogger`
- `useMap`
- `useMediaDevices`
- `useMotion`
- `useMount`
- `useNetwork`
- `useObservable`
- `useOrientation`
- `useRaf`
- `useSetState`
- `useSize`
- `useSpeech`
- `useSpring`
- `useTimeout`
- `useTitle`
- `useToggle`
- `useTween`
- `useUnmount`
- `useWindowSize` as `useWindowSize2`
- `useMedia` as `useMedia2`

### other

- [`useOnClickOutside`](https://github.com/Andarist/use-onclickoutside)

## Whan does `hooky` means?

The `-y` (i) suffix in Russian is like `-s (-es)` in English and is used for plural form.

## License

MIT