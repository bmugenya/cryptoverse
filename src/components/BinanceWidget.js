import React, { useEffect, useRef } from "react"

const BinanceWidget = () => {
  const r = useRef(null)
  const options = {
    locale: "en",
    theme: "dark",
    urlParmas: {
      ref: "37243377",
      utm_source: "TRQPro",
    },
  }

  useEffect(() => {
    if (typeof window !== undefined) {
      const { Widget, unloadWidget } = require("binance-fiat-widget")
      if (r?.current) {
        Widget(r.current, options)
      }

      return () => {
        unloadWidget()
      }
    }
  }, [r])

  return <div ref={r}></div>
}

export default BinanceWidget