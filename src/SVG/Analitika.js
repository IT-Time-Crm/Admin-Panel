import React from "react";

function Analitika() {
  return (
    <div>
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask
          id="a"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path fill="#D9D9D9" d="M0 0h30v30H0z" />
        </mask>
        <g mask="url(#a)" fill="#121212">
          <path d="m1.469 18.546 8.923-5.263 6.514 5.64 11.515-7.019-1.032-1.718-10.343 6.31-6.487-5.614-9.09 5.355v2.31Zm8.811-3.423c1.44 0 2.619-1.2 2.619-2.67s-1.179-2.66-2.619-2.66c-1.442 0-2.618 1.19-2.618 2.66 0 1.47 1.176 2.67 2.618 2.67Zm6.63 5.249c1.443 0 2.608-1.2 2.608-2.67s-1.165-2.66-2.607-2.66c-1.44 0-2.619 1.19-2.619 2.66 0 1.47 1.178 2.67 2.619 2.67Zm10.325-6.394c1.44 0 2.616-1.202 2.616-2.67 0-1.472-1.176-2.671-2.616-2.671-1.443 0-2.619 1.2-2.619 2.67s1.176 2.671 2.619 2.671Z" />
          <path d="M0 27.382c0 .72.47 1.188 1.178 1.188H28.64c.749 0 1.36-.58 1.36-1.363 0-.771-.611-1.366-1.36-1.366H3.066c-.276 0-.38-.105-.38-.386v-22c0-.756-.58-1.379-1.336-1.379C.58 2.076 0 2.7 0 3.454v23.928Z" />
        </g>
      </svg>
    </div>
  );
}

export default Analitika;