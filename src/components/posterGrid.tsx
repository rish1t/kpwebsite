import Image from 'next/image'

const imageFiles = [
  '/course/course1.jpg',
  '/course/course4.jpg',
  '/course/course6.jpg',
  '/course/course5.jpg',
  '/course/course7.jpg',
]

export default function PosterGrid() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8 md:mb-12">
        <span className="text-sm font-semibold px-3 py-1 border border-gray-300 rounded-full">OUR COURSES</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-9">
            Master the Art of Beauty <br />with Our Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imageFiles.map((file, index) => (
          <div
            key={index}
            className="aspect-square relative overflow-hidden rounded-lg"
          >
            <Image
              src={file} // Import image directly
              alt={`Course image ${index + 1}`}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </main>
  )
}
