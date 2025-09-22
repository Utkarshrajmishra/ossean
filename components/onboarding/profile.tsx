"use client"
import { useState, useRef } from "react";
import Container from "../home/container";
import Image from "next/image";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Pencil } from "lucide-react"; // pen icon

const Profile = () => {
  const [preview, setPreview] = useState<string | null>(null);
  const [bio, setBio] = useState<string>(""); // bio state
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePenClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Container>
      <section className="font-gist flex flex-col items-center gap-4">
        <h1 className="text-4xl mt-12 text-neutral-800 font-bold text-center">
          Add profile details
        </h1>
        <p className="text-neutral-500">Add your profile image, name and bio.</p>

        <div className="space-y-6 mt-6 w-1/3 flex flex-col items-center">
          {/* Profile image upload */}
          <div className="relative">
            <label
              htmlFor="profileImage"
              className="cursor-pointer flex items-center justify-center h-28 w-28 rounded-full bg-neutral-200 border border-neutral-300 overflow-hidden hover:opacity-90 transition"
            >
              {preview ? (
                <Image
                  src={preview}
                  alt="Profile Preview"
                  fill
                  className="object-cover rounded-full"
                />
              ) : (
                <span className="text-sm text-neutral-500">Upload</span>
              )}

              {/* Hidden file input */}
              <input
                ref={fileInputRef}
                id="profileImage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
            </label>

            {/* Pen icon overlay (clickable) */}
            <button
              type="button"
              onClick={handlePenClick}
              className="absolute bottom-0 right-0 translate-x-2 translate-y-2 bg-neutral-700 p-2 rounded-full shadow-md hover:bg-neutral-800 transition"
            >
              <Pencil size={16} className="text-white" />
            </button>
          </div>

          {/* Username input */}
          <Input
            type="text"
            placeholder="user name"
            className="h-11 rounded-lg w-full placeholder:text-neutral-400 bg-neutral-100 text-black text-left border border-neutral-300 outline-none transition"
          />

          {/* Bio textarea with char limit + counter inside */}
          <div className="relative w-full">
            <Textarea
              placeholder="bio"
              value={bio}
              onChange={(e) => {
                if (e.target.value.length <= 100) {
                  setBio(e.target.value);
                }
              }}
              className="h-24 rounded-lg w-full placeholder:text-neutral-400 bg-neutral-100 text-black text-left border border-neutral-300 outline-none transition pr-12"
            />
            {/* Counter inside bottom-right */}
            <span
              className={`absolute bottom-2 right-3 text-xs ${
                bio.length === 100 ? "text-red-500" : "text-neutral-500"
              }`}
            >
              {bio.length}/100
            </span>
          </div>
        </div>

        {/* Continue button */}
        <button className="bg-neutral-700 w-1/3 mt-12 flex items-center justify-center gap-2 cursor-pointer text-white py-3 hover:bg-neutral-800 rounded-full text-sm sm:text-base shadow-md transition-all duration-200">
          Continue
        </button>
      </section>
    </Container>
  );
};

export default Profile;
