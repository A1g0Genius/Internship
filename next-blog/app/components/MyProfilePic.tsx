import Image from "next/image";

export default function MyProfilePic() {
  return (
      <section className="w-full mx-auto"> 
          <Image
              className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
              src='/images/profile.jpg'
              width={250}
              height={250}
              alt="Yash Panchiwala"
              priority={true}
          />
    </section>
  )
}
