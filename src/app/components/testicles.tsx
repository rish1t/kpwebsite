import Image from 'next/image';

const BentoGrid: React.FC = () => {
  return (
    <div className="flex justify-center items-center w-[100%] min-h-screen h-screen bg-gray-100">
      <div className="grid grid-cols-6 gap-2 w-full h-[100%] p-2">
        {/* Large item */}
        <div className="col-span-6 sm:col-span-3 sm:row-span-2 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 1"
            fill
            className="object-cover"
          />
        </div>

        {/* Medium item */}
        <div className="col-span-6 sm:col-span-2 sm:row-span-2 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 2"
            fill
            className="object-cover"
          />
        </div>

        {/* Tall item */}
        <div className="col-span-3 sm:col-span-1 sm:row-span-3 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 3"
            fill
            className="object-cover"
          />
        </div>

        {/* Small item */}
        <div className="col-span-3 sm:col-span-2 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 4"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-3 sm:col-span-2 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 4"
            fill
            className="object-cover"
          />
        </div>

        {/* Small square item */}
        <div className="col-span-3 sm:col-span-1 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 5"
            fill
            className="object-cover"
          />
        </div>

        {/* Wide item */}
        <div className="col-span-6 sm:col-span-3 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 6"
            fill
            className="object-cover"
          />
        </div>
        <div className="col-span-6 sm:col-span-3 relative h-40 sm:h-auto overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Bento Image 6"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BentoGrid;
