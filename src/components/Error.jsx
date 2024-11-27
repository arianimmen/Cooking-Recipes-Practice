function Error({ error = "" }) {
  return (
    <div className="flex flex-col items-center justify-center mb-16 text-center">
      <svg
        className="size-52 md:size-80"
        viewBox="0 0 232 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M85.996 140H79.0314M74 140C61.8497 140 52 130.374 52 118.5C52 106.626 61.8497 97 74 97C74.5167 97 75.0292 97.0174 75.537 97.0517C75.1842 95.0878 75 93.0654 75 91C75 72.2223 90.2223 57 109 57C123.991 57 136.716 66.702 141.239 80.1695C142.31 80.0575 143.398 80 144.5 80C161.345 80 175 93.4315 175 110C175 125.741 162.675 138.727 147 139.978V140H90.5078H74Z"
          stroke="#FF6E6F"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M98.6123 64.3426C98.6123 96.5657 127.633 123.118 165 126.703C160.317 132.461 153.086 136.367 144.847 136.981V137H77.7431C69.6013 137 56 133.57 56 118.548C56 103.527 66.5742 100.097 77.7431 100.097C78.218 100.097 78.6891 100.112 79.1559 100.141C78.8316 98.4556 78.7746 96.7184 78.6623 94.9474C77.9038 82.9842 83.1229 67.907 98.6304 63C98.618 63.4473 98.6123 63.8944 98.6123 64.3426ZM109.116 114.758C106.078 114.758 103.614 117.192 103.614 120.195C103.614 123.198 106.078 125.632 109.116 125.632C112.155 125.632 114.618 123.198 114.618 120.195C114.618 117.192 112.155 114.758 109.116 114.758Z"
          fill="#FDEEEE"
        />
        <path
          d="M109.5 126C112.538 126 115 123.538 115 120.5C115 117.462 112.538 115 109.5 115C106.462 115 104 117.462 104 120.5C104 123.538 106.462 126 109.5 126Z"
          stroke="#FF6E6F"
          strokeWidth="2.5"
        />
        <path
          d="M94 109L101 103.507L94 98.2776"
          stroke="#FF6E6F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M125 109L118 103.507L125 98.2776"
          stroke="#FF6E6F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M119 67C125.509 68.7226 130.648 73.8129 132.44 80.2932"
          stroke="#FDEEEE"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M140 50C141.657 50 143 48.6569 143 47C143 45.3431 141.657 44 140 44C138.343 44 137 45.3431 137 47C137 48.6569 138.343 50 140 50Z"
          stroke="#F67172"
          strokeWidth="2"
        />
        <path
          d="M173.5 63C173.5 64.3807 172.381 65.5 171 65.5C169.619 65.5 168.5 64.3807 168.5 63C168.5 61.6193 169.619 60.5 171 60.5C172.381 60.5 173.5 61.6193 173.5 63Z"
          fill="#FDEEEE"
          stroke="#F67172"
        />
        <path
          d="M147.757 57.7573L156.116 66.1156M156.243 57.7573L147.884 66.1156L156.243 57.7573Z"
          stroke="#F67172"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M53.4038 75.5962L59.4038 81.5962M59.4038 75.5962L53.4038 81.5962L59.4038 75.5962Z"
          stroke="#FF6E6F"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M67 69C68.6569 69 70 67.6569 70 66C70 64.3431 68.6569 63 67 63C65.3431 63 64 64.3431 64 66C64 67.6569 65.3431 69 67 69Z"
          fill="#FF6E6F"
        />
      </svg>

      <p className="font-bold md:text-3xl text-lg relative bottom-10 md:bottom-16">
        Something went Wrong!
      </p>
      <p className="text-sm bottom-5 md:text-lg relative md:bottom-7">
        {error}
      </p>
    </div>
  );
}

export default Error;
