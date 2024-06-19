import { useEffect, useState } from "react";
import axios from "axios";

export function Assignment5() {
  const [profile, setProfile] = useState();
  const [success, setSuccess] = useState(false);
  const [username, setUsername] = useState("");

  async function fetchData() {
    setSuccess(false);
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      console.log(response.data);
      setProfile(response.data);
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="w-full h-10 flex flex-row justify-center mt-10">
        <input
          type="search"
          class="w-52 p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Enter Github Username"
          onInput={(e) => setUsername(e.target.value)}
          required
        />
        <button
          className="ml-2 rounded-2xl text-sm bg-blue-700 hover:bg-blue-800 text-white p-2"
          onClick={fetchData}
        >
          Fetch
        </button>
      </div>
      {!success ? (
        <></>
      ) : (
        <div className="flex w-full min-h-max justify-center items-center ">
          <div className="m-10 w-96 flex flex-col items-center bg-slate-300 rounded-xl">
            <div className="m-5">
              <img
                src={profile.avatar_url}
                alt="avatar"
                className="rounded-full w-40 h-40"
              />
            </div>
            <div className="font-bold text-2xl text-myColor-500">
              {profile.name}
            </div>
            <div className="font-bold m-2 text-xl text-myColor-700">
              {profile.public_repos} Repositories
            </div>
            <div className="flex flex-row justify-around text-myColor-800 w-full m-5 text-lg font-bold">
              <div className="">{profile.followers} Followers</div>
              <div className="">{profile.following} Following</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
