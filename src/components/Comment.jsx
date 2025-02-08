import Image from './Image';

const Comment = () => {
  return (
    <div className="mb-8 rounded-xl bg-slate-50 p-4">
      <div className="flex items-center gap-4">
        <Image
          path="userImg.jpeg"
          className="h-10 w-10 rounded-full object-cover"
          w="40"
        />
        <span className="font-medium">John Doe</span>
        <span className="text-sm text-gray-500">2 days ago</span>
      </div>
      <div className="mt-4">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          laboriosam autem praesentium ex, dignissimos, perspiciatis incidunt
          voluptatem consequuntur saepe nisi tempora id architecto repellendus
          quis! Fugit nulla perferendis porro quos.
        </p>
      </div>
    </div>
  );
};

export default Comment;
