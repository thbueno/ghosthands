export default function ProfileHeader() {
  return (
    <div className="profile-header opacity-0 translate-y-4 blur-[4px] will-change-transform">
      <img
        src="/images/avatar.jpg"
        alt="Jarek Ceborski"
        className="w-[72px] h-[72px] rounded-full object-cover mb-4"
      />
      <h1 className="text-[18px] font-semibold leading-[1.3] tracking-[-0.01em] text-primary-dark">
        I'm Jarek – designer and engineer
      </h1>
      <p className="text-[15px] leading-[1.5] text-secondary-muted mt-1">
        I love building products. I have a decade of experience with over 15 digital products.
      </p>
    </div>
  );
}
