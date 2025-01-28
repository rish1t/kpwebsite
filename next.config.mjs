/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["images.unsplash.com", "drive.google.com", "cdn.example.com", "another-domain.com", "res.cloudinary.com", "cdn.iconscout.com", "dsm01pap008files.storage.live.com", "centralus1-mediap.svc.ms"],
        remotePatterns: [
            {
              protocol: "https",
              hostname: "drive.google.com",
            },
          ],
    },
};

export default nextConfig;
