import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 150 150"
      width={150}
      height={150}
      {...props}
    >
      <linearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={36.296}
        y1={34.814}
        x2={94.511}
        y2={34.814}
      >
        <stop offset={0} stopColor={props.color || "#fff"} />
        <stop offset={1} stopColor={props.color || "#fff"} stopOpacity={0} />
      </linearGradient>
      <path
        fill="none"
        stroke="url(#prefix__a)"
        strokeWidth={props.stroke || 4}
        strokeLinecap="round"
        strokeLinejoin="bevel"
        d="M38.296 43.227s21.86-26.035 54.216-13.336"
      >
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 75 75"
          to="-360 75 75"
          dur=".8s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}

export default SvgComponent
