
# react-hooky

[![Greenkeeper badge](https://badges.greenkeeper.io/cloudever/react-hooky.svg)](https://greenkeeper.io/)
![Depfu](https://img.shields.io/depfu/cloudever/react-hooky.svg)

[![NPM](https://nodei.co/npm/react-hooky.png?compact=true)](https://nodei.co/npm/react-hooky/)

## Why?

Since the appearance of hooks in React, many packages have been published for various purposes, and in a reason to not pull many new small dependencies, most of them are combined in this package through re-export.

This package proxies dependencies and does not need to be compiled. It's built upon ES6 Modules for `webpack` and `rollup` and tree-shaking support.

A bundle size is optimized by bundler when used with ESM modules, so keep calm and feel free to use the package.

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

 - [`<Audio /> `](https://github.com/palmerhq/the-platform#Audio )
 - [`<Preload /> `](https://github.com/palmerhq/the-platform#Preload )
 - [`<Script /> `](https://github.com/palmerhq/the-platform#Script )
 - [`<Stylesheet /> `](https://github.com/palmerhq/the-platform#Stylesheet )
 - [`<Video /> `](https://github.com/palmerhq/the-platform#Video )
 - [`useDeviceMotion`](https://github.com/palmerhq/the-platform#useDeviceMotion)
 - [`useDeviceOrientation`](https://github.com/palmerhq/the-platform#useDeviceOrientation)
 - [`useGeoPosition`](https://github.com/palmerhq/the-platform#useGeoPosition)
 - [`useIntersectionObserver`](https://github.com/palmerhq/the-platform#useIntersectionObserver)
 - [`useMedia`](https://github.com/palmerhq/the-platform#useMedia)
 - [`useNetworkStatus`](https://github.com/palmerhq/the-platform#useNetworkStatus)
 - [`useWindowScrollPosition`](https://github.com/palmerhq/the-platform#useWindowScrollPosition)
 - [`useWindowSize`](https://github.com/palmerhq/the-platform#useWindowSize)

### [react-use](https://github.com/streamich/react-use)

- [`useAsync`](https://github.com/streamich/react-use/blob/master/docs/useAsync.md)
- [`useAudio`](https://github.com/streamich/react-use/blob/master/docs/useAudio.md)
- [`useBattery`](https://github.com/streamich/react-use/blob/master/docs/useBattery.md)
- [`useCounter`](https://github.com/streamich/react-use/blob/master/docs/useCounter.md)
- [`useCss`](https://github.com/streamich/react-use/blob/master/docs/useCss.md)
- [`useFavicon`](https://github.com/streamich/react-use/blob/master/docs/useFavicon.md)
- [`useGeolocation`](https://github.com/streamich/react-use/blob/master/docs/useGeolocation.md)
- [`useHover`](https://github.com/streamich/react-use/blob/master/docs/useHover.md)
- [`useIdle`](https://github.com/streamich/react-use/blob/master/docs/useIdle.md)
- [`useLifecycles`](https://github.com/streamich/react-use/blob/master/docs/useLifecycles.md)
- [`useList`](https://github.com/streamich/react-use/blob/master/docs/useList.md)
- [`useLocalStorage`](https://github.com/streamich/react-use/blob/master/docs/useLocalStorage.md)
- [`useLocation`](https://github.com/streamich/react-use/blob/master/docs/useLocation.md)
- [`useLogger`](https://github.com/streamich/react-use/blob/master/docs/useLogger.md)
- [`useMap`](https://github.com/streamich/react-use/blob/master/docs/useMap.md)
- [`useMediaDevices`](https://github.com/streamich/react-use/blob/master/docs/useMediaDevices.md)
- [`useMotion`](https://github.com/streamich/react-use/blob/master/docs/useMotion.md)
- [`useMount`](https://github.com/streamich/react-use/blob/master/docs/useMount.md)
- [`useNetwork`](https://github.com/streamich/react-use/blob/master/docs/useNetwork.md)
- [`useObservable`](https://github.com/streamich/react-use/blob/master/docs/useObservable.md)
- [`useOrientation`](https://github.com/streamich/react-use/blob/master/docs/useOrientation.md)
- [`useRaf`](https://github.com/streamich/react-use/blob/master/docs/useRaf.md)
- [`useSetState`](https://github.com/streamich/react-use/blob/master/docs/useSetState.md)
- [`useSize`](https://github.com/streamich/react-use/blob/master/docs/useSize.md)
- [`useSpeech`](https://github.com/streamich/react-use/blob/master/docs/useSpeech.md)
- [`useSpring`](https://github.com/streamich/react-use/blob/master/docs/useSpring.md)
- [`useTimeout`](https://github.com/streamich/react-use/blob/master/docs/useTimeout.md)
- [`useTitle`](https://github.com/streamich/react-use/blob/master/docs/useTitle.md)
- [`useToggle`](https://github.com/streamich/react-use/blob/master/docs/useToggle.md)
- [`useTween`](https://github.com/streamich/react-use/blob/master/docs/useTween.md)
- [`useUnmount`](https://github.com/streamich/react-use/blob/master/docs/useUnmount.md)
- [`useWindowSize`](https://github.com/streamich/react-use/blob/master/docs/useWindowSize.md) as `useWindowSize2`
- [`useMedia`](https://github.com/streamich/react-use/blob/master/docs/useMedia.md) as `useMedia2`

### other

- [`useOnClickOutside`](https://github.com/streamich/react-use/blob/master/docs/useOnClickOutside.md)

## Contribution

Feel free to pull your request of hooks and keep agreement of conventional commits.

## Whan does `hooky` means?

The `-y` (i) suffix in Russian is just like `-s (-es)` in English and usable for plural form of a word.

## License

MIT