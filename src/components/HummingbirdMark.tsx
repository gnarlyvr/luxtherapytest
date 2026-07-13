type HummingbirdMarkProps = {
  className?: string;
  decorative?: boolean;
};

/** Decorative hummingbird mark inspired by the New Aviv logo silhouette */
export function HummingbirdMark({
  className = "",
  decorative = true,
}: HummingbirdMarkProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden={decorative}
      focusable="false"
    >
      {!decorative && <title>Hummingbird</title>}
      <path d="M74.2 18.4c4.6-6.8 12.4-11.6 21.8-12.8-3.2 5.1-4.5 10.2-3.9 15.3 7.8-1.9 14.2.6 18.9 5.8-6.1 1.1-11.4 3.9-15.4 8.1 5.6 7.9 6.1 17.4 1.8 26.3-6.9-5.4-15.4-8-24.2-7.4 1.4 9.6-1.4 18.9-8.3 25.7-1.9-8.5-6.7-15.6-13.5-20.4-5.5 7.4-14 12.1-23.4 12.8 5.1-7.3 6.2-15.4 3.4-23.1C22.4 54.2 12.6 56 4 53.6c7.2-5.4 15.8-7.6 24.4-6.4-1.8-8.9 1.1-17.8 7.9-24.1 6.6 6.2 15.3 9.3 24.1 8.7-1.3-5.5-.2-11.2 3.1-16.1 3.2 1.7 6.9 2.8 10.7 2.7z" />
    </svg>
  );
}
