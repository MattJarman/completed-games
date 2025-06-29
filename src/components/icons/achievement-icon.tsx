import { ComponentProps } from "react";

export const AchievementIcon = (props: ComponentProps<"svg">) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36 36"
      fill="none"
      {...props}
    >
      <path
        stroke="url(#svgid_0)"
        fill="url(#svgid_1)"
        d="M10.1777 10.0258L10.3929 9.80693V9.49999V5.52777H14.2857H14.6001L14.8205 5.30358L18 2.06976L21.1795 5.30358L21.3999 5.52777H21.7143H25.6071V9.50001V9.80696L25.8223 10.0258L28.5553 12.8055L25.8223 15.5853L25.6071 15.8041V16.1111V20.0833H21.7143H21.3999L21.1795 20.3075L18 23.5413L14.8205 20.3075L14.6001 20.0833H14.2857H10.3929V16.1111V15.8042L10.1777 15.5853L7.44464 12.8055L10.1777 10.0258ZM14.7399 28.0317L11.56 33.4221L9.85164 29.9469L9.6456 29.5278H9.17857H6.29474L8.68445 25.3611H12.1142L14.7399 28.0317ZM26.8214 29.5278H26.3544L26.1484 29.9469L24.44 33.4221L21.2601 28.0317L23.8858 25.3611H27.3155L29.7053 29.5278H26.8214Z"
        strokeWidth="1.5"
      ></path>
      <circle stroke="#FFAB2C" fill="#FFC82C" cx="18" cy="13" r="5.5"></circle>
      <defs>
        <linearGradient
          id="svgid_1"
          x1="7.08"
          y1="3.72"
          x2="33.6694"
          y2="25.0697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0056D6"></stop>
          <stop offset="1" stopColor="#1A9FFF"></stop>
        </linearGradient>
        <linearGradient
          id="svgid_0"
          x1="7.08"
          y1="3.72"
          x2="33.6694"
          y2="25.0697"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0056D6"></stop>
          <stop offset="1" stopColor="#1A9FFF"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};
